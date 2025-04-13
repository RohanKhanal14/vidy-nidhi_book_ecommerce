import { Request, Response } from "express";
import User from "../models/User";
import { response } from "../utils/responseHandler";
import crypto from "crypto";
import {
  sendResetPasswordEmail,
  sendVerificationEmail,
} from "../config/emailConfig";
import { generateToken } from "../utils/generateToken";

export const register = async (req: Request, res: Response) => {
  try {
    // getting data from the frontend
    const { email, password, firstName, lastName, agreeToTerms } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response(res, 400, "User already exists");
    }

    const verificationCode = crypto.randomBytes(32).toString("hex");

    // creating a new user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      agreeToTerms,
      verificationCode,
    });
    const emailResponse = await sendVerificationEmail(
      user.email,
      verificationCode,
    );
    console.log(emailResponse);
    return response(
      res,
      201,
      "User created successfully, please verify your email",
      user,
    );
  } catch (error) {
    console.log(error);
    return response(res, 500, "Internal server error");
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const token = req.params;
    const user = await User.findOne({ verificationCode: token });
    if (!user) {
      return response(res, 400, "Invalid verification code");
    }

    user.isVerified = true;
    user.verificationCode = undefined;

    const accessToken = generateToken(user);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    await user.save();
    return response(res, 200, "Email verified successfully");
  } catch (error) {
    console.log(error);
    return response(res, 500, "Internal server error");
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response(res, 400, "User not found");
    }
    if (!user.isVerified) {
      return response(res, 400, "Please verify your email");
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return response(res, 400, "Invalid email or password");
    }
    const accessToken = generateToken(user);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    return response(res, 200, "Login successful", {
      user: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      // accessToken,
    });
  } catch (error) {
    console.log(error);
    return response(res, 500, "Internal server error");
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response(res, 400, "Account does not exist with this email");
    }
    const resetPasswordToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
    await user.save();
    const emailResponse = await sendResetPasswordEmail(
      user.email,
      resetPasswordToken,
    );
    console.log(emailResponse);
    return response(res, 200, "Reset password email sent", {
      user: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.log(error);
    return response(res, 500, "Internal server error");
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const token = req.params;
    const { newPassword } = req.body;

    if (newPassword.length < 8) {
      return response(res, 400, "Password must be at least 8 characters long");
    }
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return response(res, 400, "Invalid or expired reset password token");
    }
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    return response(res, 200, "Password reset successful");
  } catch (error) {
    console.log(error);
    return response(res, 500, "Internal server error");
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      maxAge: 0,
    });
    return response(res, 200, "Logged out successfully");
  } catch (error) {
    console.log(error);
    return response(res, 500, "Internal server error");
  }
};
