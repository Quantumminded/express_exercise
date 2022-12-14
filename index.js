const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('home.html', {root: __dirname + "/public"});
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname + "/public"});
})

app.get('/contact', (req, res) => {
    res.sendFile('contact.html', {root: __dirname + "/public"});
})

app.all('*', (req, res) => {
    res.sendFile('404.html', {root: __dirname + "/public"});
})
app.listen(3000)