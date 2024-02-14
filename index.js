const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000;
require('dotenv').config();
require('./db');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'The API is working' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});