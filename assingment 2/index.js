const express = require('express');
const app = express();
const PORT = 3000;

const logRequestDetails = (req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next(); 
};
app.use(logRequestDetails);

const isAuthenticated = true; 

const authMiddleware = (req, res, next) => {
    if (!isAuthenticated) {
        return res.status(401).send('Unauthorized');
    }
    next(); 
};

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.get('/about', (req, res) => {
    res.send('This is an Express app that demonstrates routing.');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at: contact@example.com');
});


app.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Welcome to your dashboard');
});

// Task 3: Handling 404 Errors with Express
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});