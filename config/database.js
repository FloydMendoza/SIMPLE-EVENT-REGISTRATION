import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("URI:", process.env.MONGODB_URI);

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
    // process.exit(1);  // 👈 COMMENT THIS OUT FOR NOW
  }
};

export default connectDB;
