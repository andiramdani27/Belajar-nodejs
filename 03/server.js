var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('hallo ini dari andi ramdani');
})

app.listen(3000);

console.log("server running on http://localhost:3000");