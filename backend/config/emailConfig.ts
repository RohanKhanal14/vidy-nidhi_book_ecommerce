import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error.message, "No connection to the email server");
  } else {
    console.log("Ready to send emails");
  }
});

const sendEmail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
    from: `"Vidhyanidhi" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: body,
  });
};

export const sendVerificationEmail = async (
  to: string,
  verificationCode: string,
) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verify-email/${verificationCode}`;
  const html = `
   <h1>Welcome to Vidhyanidhi</h1>
   <h2>Verify your email</h2>
   <p>Click the link below to verify your email</p>
   <a href="${verificationLink}">Verify email</a>
   <p>If you did not sign up for Vidhyanidhi, please ignore this email</p>
   `;
  await sendEmail(to, "Verify your email", html);
};

export const sendResetPasswordEmail = async (
  to: string,
  resetToken: string,
) => {
  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
  const html = `
  <h1>Vidhyanidhi</h1>
  <h2>Reset your password</h2>
  <p>Click the link below to reset your password</p>
  <a href="${resetLink}">Reset password</a>
  <p>If you did not request a password reset, please ignore this email</p>
  `;
  await sendEmail(to, "Reset your password", html);
};
