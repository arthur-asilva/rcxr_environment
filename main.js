const express = require('express');
const path = require('path');
const app = express();

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
    );
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ada/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ada/index.html'));
});

app.get('/davinci/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'davinci/index.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
});
