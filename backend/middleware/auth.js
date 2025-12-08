import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Check if demo mode is enabled
  const isDemoMode = process.env.DEMO_MODE === "true";

  if (isDemoMode) {
    // In demo mode, allow access without token
    req.body.userId = "demo-user-id";
    console.log("🎭 Demo mode: Bypassing authentication");
    return next();
  }

  // Normal authentication flow
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "NOT Authorized... Login Again!!",
    });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
