import mongoose from "mongoose";
import dotenv from "dotenv";
import foodModel from "../models/foodModel.js";

dotenv.config();

// ⚠️ IMPORTANT: These are PUBLIC Cloudinary URLs hosted by the project owner
// Anyone can use this seed data without needing their own Cloudinary account
// Perfect for: Demo deployments, Contributors, Recruiters testing your app
const seedData = [
  {
    "name": "Greek salad",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218724/food-delivery/food_1.png",
    "imagePublicId": "food-delivery/food_1",
    "category": "Salad"
  },
  {
    "name": "Veg salad",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 18,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218726/food-delivery/food_2.png",
    "imagePublicId": "food-delivery/food_2",
    "category": "Salad"
  },
  {
    "name": "Clover Salad",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 16,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218729/food-delivery/food_3.png",
    "imagePublicId": "food-delivery/food_3",
    "category": "Salad"
  },
  {
    "name": "Chicken Salad",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 24,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218731/food-delivery/food_4.png",
    "imagePublicId": "food-delivery/food_4",
    "category": "Salad"
  },
  {
    "name": "Lasagna Rolls",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 14,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218733/food-delivery/food_5.png",
    "imagePublicId": "food-delivery/food_5",
    "category": "Rolls"
  },
  {
    "name": "Peri Peri Rolls",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218735/food-delivery/food_6.png",
    "imagePublicId": "food-delivery/food_6",
    "category": "Rolls"
  },
  {
    "name": "Chicken Rolls",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 20,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218738/food-delivery/food_7.png",
    "imagePublicId": "food-delivery/food_7",
    "category": "Rolls"
  },
  {
    "name": "Veg Rolls",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 15,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218740/food-delivery/food_8.png",
    "imagePublicId": "food-delivery/food_8",
    "category": "Rolls"
  },
  {
    "name": "Ripple Ice Cream",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 14,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218741/food-delivery/food_9.png",
    "imagePublicId": "food-delivery/food_9",
    "category": "Deserts"
  },
  {
    "name": "Fruit Ice Cream",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 22,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218742/food-delivery/food_10.png",
    "imagePublicId": "food-delivery/food_10",
    "category": "Deserts"
  },
  {
    "name": "Jar Ice Cream",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 10,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218745/food-delivery/food_11.png",
    "imagePublicId": "food-delivery/food_11",
    "category": "Deserts"
  },
  {
    "name": "Vanilla Ice Cream",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218747/food-delivery/food_12.png",
    "imagePublicId": "food-delivery/food_12",
    "category": "Deserts"
  },
  {
    "name": "Chicken Sandwich",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218749/food-delivery/food_13.png",
    "imagePublicId": "food-delivery/food_13",
    "category": "Sandwich"
  },
  {
    "name": "Vegan Sandwich",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 18,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218751/food-delivery/food_14.png",
    "imagePublicId": "food-delivery/food_14",
    "category": "Sandwich"
  },
  {
    "name": "Grilled Sandwich",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 16,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218753/food-delivery/food_15.png",
    "imagePublicId": "food-delivery/food_15",
    "category": "Sandwich"
  },
  {
    "name": "Bread Sandwich",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 24,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218754/food-delivery/food_16.png",
    "imagePublicId": "food-delivery/food_16",
    "category": "Sandwich"
  },
  {
    "name": "Cup Cake",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 14,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218757/food-delivery/food_17.png",
    "imagePublicId": "food-delivery/food_17",
    "category": "Cake"
  },
  {
    "name": "Vegan Cake",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218758/food-delivery/food_18.png",
    "imagePublicId": "food-delivery/food_18",
    "category": "Cake"
  },
  {
    "name": "Butterscotch Cake",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 20,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218760/food-delivery/food_19.png",
    "imagePublicId": "food-delivery/food_19",
    "category": "Cake"
  },
  {
    "name": "Sliced Cake",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 15,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218762/food-delivery/food_20.png",
    "imagePublicId": "food-delivery/food_20",
    "category": "Cake"
  },
  {
    "name": "Garlic Mushroom",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 14,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218763/food-delivery/food_21.png",
    "imagePublicId": "food-delivery/food_21",
    "category": "Pure Veg"
  },
  {
    "name": "Fried Cauliflower",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 22,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218765/food-delivery/food_22.png",
    "imagePublicId": "food-delivery/food_22",
    "category": "Pure Veg"
  },
  {
    "name": "Mix Veg Pulao",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 10,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218767/food-delivery/food_23.png",
    "imagePublicId": "food-delivery/food_23",
    "category": "Pure Veg"
  },
  {
    "name": "Rice Zucchini",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218769/food-delivery/food_24.png",
    "imagePublicId": "food-delivery/food_24",
    "category": "Pure Veg"
  },
  {
    "name": "Cheese Pasta",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218771/food-delivery/food_25.png",
    "imagePublicId": "food-delivery/food_25",
    "category": "Pasta"
  },
  {
    "name": "Tomato Pasta",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 18,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218773/food-delivery/food_26.png",
    "imagePublicId": "food-delivery/food_26",
    "category": "Pasta"
  },
  {
    "name": "Creamy Pasta",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 16,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218775/food-delivery/food_27.png",
    "imagePublicId": "food-delivery/food_27",
    "category": "Pasta"
  },
  {
    "name": "Chicken Pasta",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 24,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218777/food-delivery/food_28.png",
    "imagePublicId": "food-delivery/food_28",
    "category": "Pasta"
  },
  {
    "name": "Butter Noodles",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 14,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218778/food-delivery/food_29.png",
    "imagePublicId": "food-delivery/food_29",
    "category": "Noodles"
  },
  {
    "name": "Veg Noodles",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 12,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218781/food-delivery/food_30.png",
    "imagePublicId": "food-delivery/food_30",
    "category": "Noodles"
  },
  {
    "name": "Somen Noodles",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 20,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218783/food-delivery/food_31.png",
    "imagePublicId": "food-delivery/food_31",
    "category": "Noodles"
  },
  {
    "name": "Cooked Noodles",
    "description": "Food provides essential nutrients for overall health and well-being",
    "price": 15,
    "image": "https://res.cloudinary.com/dq1n0rffd/image/upload/v1765218785/food-delivery/food_32.png",
    "imagePublicId": "food-delivery/food_32",
    "category": "Noodles"
  }
];

const seedDatabase = async () => {
  try {
    console.log("🌱 Connecting to database...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database connected");

    console.log("🗑️  Clearing existing food items...");
    await foodModel.deleteMany({});
    console.log("✅ Cleared existing data");

    console.log("📦 Inserting seed data with ${seedData.length} items...");
    const result = await foodModel.insertMany(seedData);
    console.log(`✅ Successfully seeded ${result.length} food items`);

    console.log("\n📊 Summary by Category:");
    const categories = await foodModel.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    categories.forEach(cat => {
      console.log(`   ${cat._id.padEnd(12)}: ${cat.count} items`);
    });

    console.log("\n✨ Database seeded successfully! Your app now has real food data.\n");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
