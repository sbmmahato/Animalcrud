const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let animals = [];

// GET all animals
app.get('/animals', (req, res) => {
    res.json(animals);
});

// POST new animal
app.post('/animals', (req, res) => {
    const newAnimal = req.body;
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

// PUT update animal
app.put('/animals/:id', (req, res) => {
    const id = req.params.id;
    const updatedAnimal = req.body;
    animals[id] = updatedAnimal;
    res.json(updatedAnimal);
});

// DELETE animal
app.delete('/animals/:id', (req, res) => {
    const id = req.params.id;
    animals.splice(id, 1);
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
