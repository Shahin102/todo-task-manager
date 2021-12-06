const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json());

// I could use the above tow commenting lines in before express versions
// and to use those we need to do --> npm install body-parser

app.get('/tasks', (req, res) => {
    const TASK_QUERY = "select * from todotaskmanager.tasks";
    connection.query(TASK_QUERY, (err, response) => {
        if (err) console.log(err)
        else res.send(response)
    })
})

app.post('/addTask', (req, res) => {
    const ADD_QUERY = `insert into todotaskmanager.tasks (task) values ('${req.body.task}')`
    connection.query(ADD_QUERY, (err) => {
        if (err) console.log(err)
        else res.send('task has been added')
    })
})

app.delete('/deleteTask/:taskid', (req, res) => {
    const DELETE_QUERY = `DELETE FROM todotaskmanager.tasks where (taskid=${req.params.taskid})`
    connection.query(DELETE_QUERY, (err, res) => {
        if (err) console.log(err)
    })
})

app.listen(4000, () => {
    console.log('running on port 4000');
})