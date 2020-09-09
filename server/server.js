const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/createRouter.js');

const tasks = [
    { name: "Replace cables", complete: "Yes"},
    { name: "Run BIOS Update", complete: "No"},
    { name: "Install Graphics Card Drivers", complete: "No"},
    { name: "Install Power Unit", complete: "Yes"},
    { name: "Plug In PC to wall socket", complete: "Yes"},
];

app.use(bodyParser.json());
app.use(cors());

const taskRouter = createRouter(tasks);
app.use('/api/tasks', taskRouter);

app.listen(3000, function () {
    console.log(`App running on port ${ this.address().port}`);
});