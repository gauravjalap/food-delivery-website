import mongoose from "mongoose";
import dotenv from "dotenv";
import foodModel from "../models/foodModel.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

dotenv.config();

const clearData = async () => {
  try {
    console.log("🌱 Connecting to database...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database connected");

    console.log("\n⚠️  WARNING: This will delete ALL data!");
    console.log("Clearing in 3 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("\n🗑️  Clearing collections...");

    const foodCount = await foodModel.countDocuments();
    await foodModel.deleteMany({});
    console.log(`✅ Deleted ${foodCount} food items`);

    const orderCount = await orderModel.countDocuments();
    await orderModel.deleteMany({});
    console.log(`✅ Deleted ${orderCount} orders`);

    // Uncomment if you want to clear users too
    // const userCount = await userModel.countDocuments();
    // await userModel.deleteMany({});
    // console.log(`✅ Deleted ${userCount} users`);

    console.log("\n✅ Database cleared successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error clearing database:", error);
    process.exit(1);
  }
};

clearData();
