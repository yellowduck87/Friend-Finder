var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routs/apiRoutes")(app);
require("./routs/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT", PORT)
});

