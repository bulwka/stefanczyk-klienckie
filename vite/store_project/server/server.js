const express = require("express");
const app = express()
const PORT = 3000;
const path = require('path');
const data = require("./data/data.json")

app.get("/promotions", function (req, res) {
    res.json(data.promotions)
})

app.use(express.static('static'))
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
