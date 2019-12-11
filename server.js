const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML ROUTES

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
  
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// API ROUTES

app.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        res.send(json);
    });
});

app.post('/api/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        let newNote = {
            title: req.body.title,
            text: req.body.text,
        };
        json.push(newNote);
        fs.writeFile('db/db.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            res.send('New Note: ' + newNote);
        });
    });
});

app.delete('/api/notes/:title', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        let deleteNote = req.params.title;
        let json = JSON.parse(data);
        let jsonDelete = json.filter(item => item.title !== deleteNote);
        fs.writeFile('db/db.json', JSON.stringify(jsonDelete), (err) => {
            if (err) throw err;
            res.send('Note Deleted.');
        });
    });
});

// LISTENING
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});