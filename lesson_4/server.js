const http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

const serv = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "X-Powered-By": "Node.js",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Set-Cookie": "sessionid=abc123; HttpOnly",
  });

  res.write("<h1>Hello, World!</h1>");
  res.write("<h1>Hello, Sumon!</h1>");
  res.write("<h1>Hello, Nuruddin-!</h1>");
  res.end();
});

serv.listen(port, hostname, () => {
  console.log(
    `Click this link and open this server http://${hostname}:${port}`
  );
});
