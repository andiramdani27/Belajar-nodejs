// SERVER JS
var http = require('http');
var route = require('./route');

http.createServer(route.handleRequest).listen(3000);

console.log("server running on http://localhost:3000");