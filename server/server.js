const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1> mamy server</h1>");
});
server.listen(5500, "127.0.0.1", () => console.log("server start"));
