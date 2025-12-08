import userModel from "../models/userModel.js";

// In-memory cart storage for demo mode
const demoCart = {};

// add items
const addToCart = async (req, res) => {
  try {
    // Demo mode handling
    if (req.body.userId === "demo-user-id") {
      if (!demoCart[req.body.itemId]) {
        demoCart[req.body.itemId] = 1;
      } else {
        demoCart[req.body.itemId] += 1;
      }
      return res.json({ success: true, message: "Added to Cart (Demo Mode)" });
    }

    // Normal mode
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData,
    });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

// remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    // Demo mode handling
    if (req.body.userId === "demo-user-id") {
      if (demoCart[req.body.itemId] > 0) {
        demoCart[req.body.itemId] -= 1;
      }
      return res.json({
        success: true,
        message: "Removed from Cart (Demo Mode)",
      });
    }

    // Normal mode
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    // Demo mode handling
    if (req.body.userId === "demo-user-id") {
      return res.json({ success: true, cartData: demoCart });
    }

    // Normal mode
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
