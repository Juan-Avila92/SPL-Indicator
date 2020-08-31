const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
	res.statusCode = 200;
	res.setHeader("content-Type", "text/plain");
	res.end("hello World\n");
});

server.listen(8080);
console.log("Server Running port 8080");
