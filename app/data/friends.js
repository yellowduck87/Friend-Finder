var PORT = process.env.PORT || 3000;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


app.listen(PORT, function() {
    console.log("App listening on PORT", PORT)
});