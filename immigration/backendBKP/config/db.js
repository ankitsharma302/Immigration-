const mongoose = require("mongoose");
// Replace database1 with your DB name

const connectDB = async () => {
  try {
    await mongoose.connect((process.env.MONGODB_URI)
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is Connected Locally...");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
