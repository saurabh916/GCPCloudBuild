var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Deployed Version is v1.1 using cloud build </h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
