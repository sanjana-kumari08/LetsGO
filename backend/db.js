const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/books';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Database Events
db.on("connected", () => console.log("✅ Database Connected"));
db.on("error", (err) => console.error("❌ Database Connection Error:", err));
db.on("disconnected", () => console.log("⚠️ Database Disconnected"));

module.exports = db;
