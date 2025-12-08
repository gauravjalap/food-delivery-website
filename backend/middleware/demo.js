// Demo mode middleware - allows access without authentication when DEMO_MODE is enabled
// This is useful for recruiters to test the application without signing up

const demoMiddleware = (req, res, next) => {
  // Check if demo mode is enabled
  const isDemoMode = process.env.DEMO_MODE === "true";

  if (isDemoMode) {
    // Create a demo user object for demo mode
    req.body.userId = "demo-user-id";
    req.userId = "demo-user-id"; // Some routes expect req.userId
    console.log("🎭 Demo mode: Request processed with demo user");
  }

  next();
};

module.exports = demoMiddleware;
