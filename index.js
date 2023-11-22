const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact-me.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

// Last Route, 404
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>  console.log(`Server started on port ${PORT}`));