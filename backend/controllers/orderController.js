import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// In-memory orders storage for demo mode
const demoOrders = [];

// placing user order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";

  try {
    // Demo mode handling - simulate order placement without Stripe
    if (req.body.userId === "demo-user-id") {
      const demoOrder = {
        _id: `demo-order-${Date.now()}`,
        userId: "demo-user-id",
        items: req.body.items,
        amount: req.body.amount,
        address: req.body.address,
        status: "Food Processing",
        date: new Date(),
        payment: true,
      };
      demoOrders.push(demoOrder);

      // Return success URL without Stripe checkout
      return res.json({
        success: true,
        message: "Order placed successfully (Demo Mode)",
        session_url: `${frontend_url}/verify?success=true&orderId=${demoOrder._id}`,
      });
    }

    // Normal mode with Stripe
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 30 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

// can implement webhooks for payment verification
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    // Demo mode handling
    if (orderId.startsWith("demo-order-")) {
      if (success == "true") {
        return res.json({ success: true, message: "Paid (Demo Mode)" });
      } else {
        return res.json({ success: false, message: "Not Paid (Demo Mode)" });
      }
    }

    // Normal mode
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    // Demo mode handling
    if (req.body.userId === "demo-user-id") {
      return res.json({ success: true, data: demoOrders });
    }

    // Normal mode
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

// listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

// api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

export { listOrders, placeOrder, verifyOrder, userOrders, updateStatus };
