const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/addWord', (req, res) => {
    const word = req.body;

    fs.appendFile(path.join(__dirname, '../public/data/dictionary.csv'), `\n${word.en},${word.ru}\n`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to file');
        } else {
            res.send('Word added successfully');
        }
    });
});

app.get(/^\/(?!addWord).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
