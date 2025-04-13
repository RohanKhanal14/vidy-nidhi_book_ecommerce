import mongoose, { Document } from "mongoose";

export interface IAddress extends Document {
  user: mongoose.Types.ObjectId;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  phoneNumber: string;
}

const addressSchema = new mongoose.Schema<IAddress>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {    
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model<IAddress>("Address", addressSchema);
