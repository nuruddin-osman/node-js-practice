const http = require("http");
const fs = require("fs");

const PORT = 3000;
const hostname = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   res.write("hello Nuruddin");
//   res.end();
// });

// server.listen(PORT, hostname, () => {
//   console.log("====================================");
//   console.log(`Server is running post http://${hostname}:${PORT}`);
//   console.log("====================================");
// });

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./views/index.html", (err, data) => {
//       res.writeHead(200, {
//         "content-type": "text/html",
//       });
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("./views/about.html", (err, data) => {
//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/contact") {
//     fs.readFile("./views/contact.html", (err, data) => {
//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     fs.readFile("./views/notfound.html", (err, data) => {
//       res.writeHead(404, { "content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   }
// });

const server = http.createServer((req, res) => {
  const readfiles = (pathUrl, statusCode) => {
    fs.readFile(pathUrl, (err, data) => {
      res.writeHead(statusCode, {
        "content-type": "text/html",
      });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    readfiles("./views/index.html", 200);
  } else if (req.url === "/about") {
    readfiles("./views/about.html", 200);
  } else if (req.url === "/contact") {
    readfiles("./views/contact.html", 200);
  } else {
    readfiles("./views/notfound.html", 404);
  }
});

server.listen(PORT, hostname, () => {
  console.log("====================================");
  console.log(`Server is running post http://${hostname}:${PORT}`);
  console.log("====================================");
});
