const express = require('express');
const cors = require('cors');
const professionalRoutes = require('./routes/professional');

const port = 8080; // Fixed to 8080 as frontend expects it
const app = express();

app
    .use(cors()) // Handles all CORS headers
    .use('/professional', professionalRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});