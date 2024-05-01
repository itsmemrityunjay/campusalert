const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB
const connectDB = require("./config/database");
connectDB();

const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);
