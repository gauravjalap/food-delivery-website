import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file?.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({
      success: true,
      message: "Food Added",
    });
  } catch (err) {
    console.log("Error: ", err);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log("Error", err);
    res.json({
      success: false,
      message: err,
    });
  }
};

// remove food item
const removeFood = async (req, res) => {
  //   console.log("req:", req);
  //   console.log("req.body:", req.body);

  const foodId = req.body.id;

  if (!foodId) {
    return res.status(400).json({ error: "Food ID is required" });
  }

  try {
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).json({ error: "Food item not found" });
    }

    const imagePath = `uploads/${food.image}`;
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image file:", err);
          return res.status(500).json({ error: "Error deleting image file" });
        }
      });
    }

    await foodModel.findByIdAndDelete(foodId);
    res.json({ success: true, message: "Food removed" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { addFood, listFood, removeFood };
