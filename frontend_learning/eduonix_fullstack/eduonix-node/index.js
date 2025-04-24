// server set up
var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');
 
// same origin request that post from same url where url is hosting in port
const cors = require('cors');

app.use(cors());

var jsonParser = bodyParser.json();
storage.init();

app.get('/student', async(req, res) => {
    res.send(await storage.values());
});

app.post('/student', jsonParser, async(req, res) => {
    const { studentId, studentName } = req.body;
    await storage.setItem(studentId, studentName);
    res.send('Added student successfully!');
});

app.listen(8080, () => {
    console.log('Server has started');
})

