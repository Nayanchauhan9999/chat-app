import mongoose, { mongo } from "mongoose";
import { IUserSignUp } from "../utils/Types";

const userSchema = new mongoose.Schema<IUserSignUp>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUserSignUp>("user", userSchema);

export default UserModel;
