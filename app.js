//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
//const codeGen = require('./CodeGenerator');

const config = require('./config/database');
const app = express();
const port = 3000;
//const hostname = '127.0.0.1';

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database '+config.database);
})

const periNets = require('./routes/appLinks');

// CORS Middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Body-Parser middleware
app.use(bodyParser.json());

app.use('/petriNets', periNets);

//codeGen.CG();

app.get('/', (req, res)=>{
  res.send('invalid endpoit');
});

app.listen(port, ()=>{
  console.log("server start on port"+ port);
});

/*
  const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
