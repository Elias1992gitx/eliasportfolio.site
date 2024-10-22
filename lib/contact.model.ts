import mongoose, { Document, Model, Schema } from "mongoose";

require("dotenv").config();

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiry: string;
  comments?: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema: Schema<IContact> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          return emailRegexPattern.test(value);
        },
        message: "Please enter a valid email",
      },
    },
    phone: {
      type: String,
      required: true,
    },
    inquiry: {
      type: String,
      required: true,
    },
    comments: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "Contact",
  }
);

export const contactModel: Model<IContact> = mongoose.model("Contact", contactSchema);