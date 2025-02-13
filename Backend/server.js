const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("EaseOn Rent API is Running"));

const PORT = process.env.PORT || 8005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
