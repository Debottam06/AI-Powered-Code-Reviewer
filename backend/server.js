const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Enables JSON parsing
app.use(cors()); // Allows cross-origin requests (optional, required if frontend is separate)

// Routes
const aiRoutes = require('./src/routes/ai.routes');
app.use('/api', aiRoutes); // Prefix all AI routes with /api

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
