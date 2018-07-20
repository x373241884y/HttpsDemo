// file http-server.js
var https = require('https');
var fs = require('fs');
var options = {
	key: fs.readFileSync('./certs/www.pwaspace.com.key.pem'),
	cert: fs.readFileSync('./certs/www.pwaspace.com.crt'),
};
https.createServer(options, function(req, res) {
	res.writeHead(200);
	res.end('hello world');
}).listen(8000);
