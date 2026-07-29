const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Route handling will go here
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my Node.js Server!");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
