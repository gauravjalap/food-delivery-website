import foodModel from "../models/foodModel.js";
import { cloudinary } from "../config/cloudinary.js";
import Joi from "joi";

// Validation schema
const foodSchema = Joi.object({
  name: Joi.string().required().min(3).max(100),
  description: Joi.string().required().min(10).max(500),
  price: Joi.number().required().min(0),
  category: Joi.string().required(),
});

// Add food item
const addFood = async (req, res) => {
  try {
    // Validate input
    const { error } = foodSchema.validate(req.body);
    if (error) {
      // Delete uploaded image if validation fails
      if (req.file) {
        await cloudinary.uploader.destroy(req.file.filename);
      }
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.path, // Cloudinary URL
      imagePublicId: req.file.filename, // For deletion
    });

    await food.save();
    res.status(201).json({
      success: true,
      message: "Food added successfully",
      data: food,
    });
  } catch (err) {
    console.error("Error adding food:", err);
    res.status(500).json({
      success: false,
      message: "Failed to add food item",
    });
  }
};

// Get all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: foods,
      count: foods.length,
    });
  } catch (err) {
    console.error("Error fetching food list:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch food items",
    });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const foodId = req.body.id;

    if (!foodId) {
      return res.status(400).json({
        success: false,
        message: "Food ID is required",
      });
    }

    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    // Delete image from Cloudinary
    if (food.imagePublicId) {
      try {
        await cloudinary.uploader.destroy(food.imagePublicId);
      } catch (cloudinaryError) {
        console.error("Error deleting image from Cloudinary:", cloudinaryError);
        // Continue with deletion even if Cloudinary fails
      }
    }

    await foodModel.findByIdAndDelete(foodId);
    res.json({
      success: true,
      message: "Food removed successfully",
    });
  } catch (err) {
    console.error("Error removing food:", err);
    res.status(500).json({
      success: false,
      message: "Failed to remove food item",
    });
  }
};

export { addFood, listFood, removeFood };
