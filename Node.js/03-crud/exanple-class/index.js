var express = require("express");

var app = express();
var port = 3000;

app.listen(port, () => {
  console.log("server is on port " + port);
});
