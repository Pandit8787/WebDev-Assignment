// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (optional, e.g., CSS or images)
app.use(express.static('public'));

// Route to render the welcome message
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to My Website' });
});
// Route to pass dynamic data (user's name)
app.get('/greeting', (req, res) => {
    const userName = 'John Doe';
    res.render('greeting', { name: userName });
});
// Route to pass an array of items
app.get('/products', (req, res) => {
    const products = ['Laptop', 'Smartphone', 'Tablet', 'Smartwatch', 'Headphones'];
    res.render('products', { products });
});
// Start the server
app.listen(4000, () => {
    console.log(`Server running on http://localhost:${4000}`);
});

