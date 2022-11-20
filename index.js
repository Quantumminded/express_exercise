const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1>');
})

app.all('*', (req, res) => {
    res.send('<h1>Page not found</h1>');
})
app.listen(3000)