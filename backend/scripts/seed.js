import mongoose from "mongoose";
import dotenv from "dotenv";
import foodModel from "../models/foodModel.js";

dotenv.config();

const seedData = [
  {
    name: "Greek salad",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/salad.jpg",
    imagePublicId: "seed_1"
  },
  {
    name: "Veg salad",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/salad2.jpg",
    imagePublicId: "seed_2"
  },
  {
    name: "Clover Salad",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/salad3.jpg",
    imagePublicId: "seed_3"
  },
  {
    name: "Chicken Salad",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/chicken-salad.jpg",
    imagePublicId: "seed_4"
  },
  {
    name: "Lasagna Rolls",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/lasagna.jpg",
    imagePublicId: "seed_5"
  },
  {
    name: "Peri Peri Rolls",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/rolls.jpg",
    imagePublicId: "seed_6"
  },
  {
    name: "Chicken Rolls",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/chicken-rolls.jpg",
    imagePublicId: "seed_7"
  },
  {
    name: "Veg Rolls",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/veg-rolls.jpg",
    imagePublicId: "seed_8"
  },
  {
    name: "Ripple Ice Cream",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/ice-cream.jpg",
    imagePublicId: "seed_9"
  },
  {
    name: "Fruit Ice Cream",
    price: 22,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/fruit-ice-cream.jpg",
    imagePublicId: "seed_10"
  },
  {
    name: "Jar Ice Cream",
    price: 10,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/jar-ice-cream.jpg",
    imagePublicId: "seed_11"
  },
  {
    name: "Vanilla Ice Cream",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/vanilla.jpg",
    imagePublicId: "seed_12"
  },
  {
    name: "Chicken Sandwich",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/chicken-sandwich.jpg",
    imagePublicId: "seed_13"
  },
  {
    name: "Vegan Sandwich",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/vegan-sandwich.jpg",
    imagePublicId: "seed_14"
  },
  {
    name: "Grilled Sandwich",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/grilled-sandwich.jpg",
    imagePublicId: "seed_15"
  },
  {
    name: "Bread Sandwich",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/bread-sandwich.jpg",
    imagePublicId: "seed_16"
  },
  {
    name: "Cup Cake",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/cupcake.jpg",
    imagePublicId: "seed_17"
  },
  {
    name: "Vegan Cake",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/vegan-cake.jpg",
    imagePublicId: "seed_18"
  },
  {
    name: "Butterscotch Cake",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/butterscotch.jpg",
    imagePublicId: "seed_19"
  },
  {
    name: "Sliced Cake",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/sliced-cake.jpg",
    imagePublicId: "seed_20"
  },
  {
    name: "Garlic Mushroom",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/mushroom.jpg",
    imagePublicId: "seed_21"
  },
  {
    name: "Fried Cauliflower",
    price: 22,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/cauliflower.jpg",
    imagePublicId: "seed_22"
  },
  {
    name: "Mix Veg Pulao",
    price: 10,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/pulao.jpg",
    imagePublicId: "seed_23"
  },
  {
    name: "Rice Zucchini",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/rice-zucchini.jpg",
    imagePublicId: "seed_24"
  },
  {
    name: "Cheese Pasta",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/cheese-pasta.jpg",
    imagePublicId: "seed_25"
  },
  {
    name: "Tomato Pasta",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/tomato-pasta.jpg",
    imagePublicId: "seed_26"
  },
  {
    name: "Creamy Pasta",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/creamy-pasta.jpg",
    imagePublicId: "seed_27"
  },
  {
    name: "Chicken Pasta",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/chicken-pasta.jpg",
    imagePublicId: "seed_28"
  },
  {
    name: "Butter Noodles",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/butter-noodles.jpg",
    imagePublicId: "seed_29"
  },
  {
    name: "Veg Noodles",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/veg-noodles.jpg",
    imagePublicId: "seed_30"
  },
  {
    name: "Somen Noodles",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/somen-noodles.jpg",
    imagePublicId: "seed_31"
  },
  {
    name: "Cooked Noodles",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
    image: "https://res.cloudinary.com/demo/image/upload/v1/food-samples/cooked-noodles.jpg",
    imagePublicId: "seed_32"
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

    console.log("📦 Inserting seed data...");
    const result = await foodModel.insertMany(seedData);
    console.log(`✅ Successfully seeded ${result.length} food items`);

    console.log("\n📊 Summary:");
    const categories = await foodModel.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    categories.forEach(cat => {
      console.log(`   ${cat._id}: ${cat.count} items`);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();