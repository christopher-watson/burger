var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

var bars = require("express-handlebars");
app.engine("handlebars", bars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});