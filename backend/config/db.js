import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("MOngo uri:", process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB Connected!!");
  });
};
