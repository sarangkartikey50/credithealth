const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendfile(path.join('build/index.html'));
});

app.listen(5000);
console.log('server started http://localhost:5000/');