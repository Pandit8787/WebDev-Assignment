const express = require('express');
const app = express();
const PORT = 3000;

// Task 1: Setting Up a Basic Express Server
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Task 2: Adding Multiple Routes to the Express App
app.get('/about', (req, res) => {
    res.send('This is an Express app that demonstrates routing.');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at: contact@example.com');
});

// Task 3: Handling 404 Errors with Express
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});