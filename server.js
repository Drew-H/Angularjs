var connect = require('connect');
var port = 3000;
connect.createServer(
	connect.static("./angularjs")
	).listen(port);
console.log("Connected via port "+ port);