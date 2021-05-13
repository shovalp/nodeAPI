"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express app instance
var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.post('/remove', function (req, res) {
    console.log('req: ', req.body);
    res.send(req.body.driver);
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
