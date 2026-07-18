const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("MongoDB connected...");
    } catch (err) {
        console.error("MongoDB Connection Error:");
        console.error(err);
    }
};

module.exports = connectDatabase;