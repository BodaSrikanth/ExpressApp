const express = require('express');
const app = express();
app.use(express.json());

let students = [];


app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id === parseInt(id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.send('Student added successfully');
});

app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if (studentIndex === -1) return res.status(404).send('Student not found');
    students[studentIndex] = req.body;
    res.send('Student updated successfully');
});

app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    students = students.filter(s => s.id !== parseInt(id));
    res.send('Student deleted successfully');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



