var http = require('http');
var dt = require('./myFirstModule');
var url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	// res.write('The current date and time are ' + dt.myDateTime());
	// res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
	// res.end();
	res.end(txt);
}).listen(8080);