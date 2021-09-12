const express = require('express');
// Added this
const connectDB = require('./config/db');

const app = express();

// And added this
// Connect to database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));