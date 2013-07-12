var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(256);
  fs.readFileSync("index.html", function(err, buff){
  if(err) 
    throw err;

  var data = buf.toString();
  response.send(data);
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
