
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/build')));
app.listen(8000);
console.log('Running on http://localhost:8000');