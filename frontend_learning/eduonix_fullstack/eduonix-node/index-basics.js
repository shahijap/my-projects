// creating simple server that serve content
// node js turns javascript into a web server(server language)
// client request pages that goes to webserver and returns response for request to client

// fs is a file system which includes functions and methods to import files
// file server
var fs = require('fs');

// url parsing
var addr = 'http://localhost:8080/default.html?name=shahija'
var url = require('url');
var result = url.parse(addr);
console.log(result.host);  // localhost:8080
console.log(result.search); // returns parameter
console.log(result.path); //  /default.html?name=shahija
console.log(result.pathname); // /default.html

// creating http library to handle request and response

var http = require('http');
http.createServer(function(req, res) {
    var inurl = url.parse(req.url, true);
    var filename = '.' + inurl.pathname; // which the file in current directory
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'content-Type': 'text/html'});
            return res.end('404 Page Not Found');
        }
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);
