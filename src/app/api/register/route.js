import mongoose from "mongoose";
import User from "./User"; // Assuming you have a User model file

export async function POST(req) {
  try {
    const body = await req.json();