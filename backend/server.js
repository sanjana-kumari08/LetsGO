const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const routes = require('./routes/router')

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use Routes
app.use(routes); 

// Start Server
const PORT = 1200 ;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
