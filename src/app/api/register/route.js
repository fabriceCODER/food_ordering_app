import mongoose from "mongoose";
import User from './user'

export async function POST(req) {
  try {
    const body = await req.json();

    // Ensure Mongoose is connected before attempting to create a user
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const createUser = await User.create(body);

    // Close the Mongoose connection after creating the user
    await mongoose.connection.close();
    
    return {
      status: 200,
      body: { message: "User created successfully", user: createUser },
    };
  } catch (error) {
    console.error("Error creating user:", error);

    return {
      status: 500,
      body: { message: "Internal Server Error" },
    };
  }
}
