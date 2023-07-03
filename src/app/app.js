const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet')
const cors = require('cors')
//middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())

//database


//router
app.get('/', (req, res) =>{
  res.status(200).send('hello world')
})

//handle errors

module.exports = app
