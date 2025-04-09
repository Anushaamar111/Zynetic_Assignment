const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(
      "Attempting to connect to MongoDB with URI:",
      process.env.MONGO_URI
    ); 
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      tls: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
