// Route JS
var fs = require('fs');
var url = require('url');

function renderFile(fileName, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(fileName, (error, data) => {
        if (error) {
            response.writeHead(400);
            response.write('File Not Found');
        }else{
            // kirim respon
            response.write(data);
        }   
        response.end();
    });
}

module.exports = {
    handleRequest : function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                renderFile('./index.html', response);
                break;
            case '/users':
                renderFile('./users.html', response);
                break;
            default:
                renderFile('./404.html', response);
                break;
        }
    }
}