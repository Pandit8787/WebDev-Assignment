// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON data' });
    }
    next();
});
// Route to handle JSON data
app.post('/json-data', (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'No JSON data provided' });
    }
    res.json({ message: 'Data received successfully', data });
});
// Route to handle URL-encoded data
app.post('/urlencoded-data', (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'No URL-encoded data provided' });
    }
    res.json({ message: 'Data received successfully', data });
});
// Start the server
app.listen(4000, () => {
    console.log(`Server running on http://localhost:${4000}`);
});

