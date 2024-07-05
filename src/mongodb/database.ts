import mongoose from "mongoose";

export const connectToDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    // console.log("MongoDb Connected");
  } catch (err) {
    console.error("MongoDb connection error:", err);
  }
};
