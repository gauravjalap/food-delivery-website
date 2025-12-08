import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Food name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    imagePublicId: {
      type: String, // Store Cloudinary public_id for deletion
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Salad",
        "Rolls",
        "Deserts",
        "Sandwich",
        "Cake",
        "Pure Veg",
        "Pasta",
        "Noodles",
      ],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Index for better query performance
foodSchema.index({ category: 1, createdAt: -1 });
foodSchema.index({ name: "text" }); // For text search

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
