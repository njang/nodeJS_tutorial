var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('The current date and time are ' + dt.myDateTime());
	res.end();
}).listen(8080);