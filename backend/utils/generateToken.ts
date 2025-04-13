import jwt from "jsonwebtoken";
import { IUser } from "../models/User";

export const generateToken = (user: IUser): string => {
  // this method is used to attach the user id to the token
  return jwt.sign(
    {
      id: user?._id,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    },
  );
};
