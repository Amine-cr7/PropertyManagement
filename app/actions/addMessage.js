"use server";

import connectDB from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import mongoose from "mongoose";

export default async function addMessage(_, formData) {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User Id Is required");
  }
  const { userId } = sessionUser;

  const recipient = formData.get("recipient");
  if (!mongoose.Types.ObjectId.isValid(recipient)) {
    return { error: "Invalid recipient" };
  }

  if (userId === recipient) {
    return { error: "You can't send a  message to yourself" };
  }
  const property = formData.get("property");
  const newMessage = new Message({
    sender: userId,
    recipient,
    property,
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
  });
  await newMessage.save();
  return { submitted: true };
}
