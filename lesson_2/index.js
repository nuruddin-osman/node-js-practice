const fs = require("fs");

// fs.writeFile("myfile.txt", "hello dear nuruddin shaheb", "utf8", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// const logEntry = `${new Date().toISOString()}: Application started\n: Md Nuruddin Osman`;
// fs.appendFile("myfile.txt", logEntry, "utf8", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// fs.unlink("myfile.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// fs.rename("myfile.txt", "myfile2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// fs.readFile("myfile2.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

fs.exists("myfile2.txt", (err) => {
  if (err) {
    console.log("found");
  } else {
    console.log("not found");
  }
});
