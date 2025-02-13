const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config(); 

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes AFTER initializing `app`
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Use routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Default route
app.get("/", (req, res) => res.send("EaseOn Rent API is Running"));

// Start server
const PORT = process.env.PORT || 8005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
