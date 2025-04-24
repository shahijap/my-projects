var express = require('express');
var storage = require('node-persist');
var bodyParser = require('body-parser');


var jsonParser  = bodyParser.json();
storage.init();

var app = express();

app.get('/test', function(req, res) {
    res.send('Hello from Express!');
});

//get data with pathvariable e.g get test data of name: stella
// test/100
app.get('/test/:data', function(req, res) {
    res.send(`Hello from Stella!`);
});

//json parser parses the json properties that provided in request body

app.post('/student', jsonParser, async (req,res) => {
    const { student_id, student_name } = req.body;
    await storage.setItem(student_id, student_name);
    console.log(req.body);
    res.send('Student has been added');
});

app.get('/student/:id', async(req, res) => {
    res.send( await storage.getItem(req.params.id));
    console.log('You are trying to retrieve data i.e., Get from Post');
});

app.listen(8080, () => {
    console.log('Server has been started!');
});