const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML ROUTES

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
  
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

// API ROUTES

// LISTENING
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});