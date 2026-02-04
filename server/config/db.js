/*
    REFERENCE: Automattic (2025) mongoose (Version 8.9.7) [NPM]. Available at: https://www.npmjs.com/package/mongoose
*/
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
