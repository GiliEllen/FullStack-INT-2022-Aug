const fs = require("fs");


// fs.readFile("./docs/blog.txt", (err, data) => {
//   // if (err) throw err
//   console.log(data.toString());
//   console.log("file successfully read...");
// });

// fs.readFileSync("./docs/blog.txt", "utf-8", (err, data) => {
//     // if (err) throw err
//     console.log(data.toString())
//     console.log("file successfully read...")
// })

// console.log("last line")

const input = "this is the new content...";

// fs.writeFile("./docs/blog5.txt", input, (err, data) => {
//   if (err) console.log(err);
//   console.log("file was written...");
// });

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("created folder...");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) console.log(err);
//   });
//   console.log("folder was deleted...");
// }

if (fs.existsSync("./docs/del.txt")) {
  fs.unlink("./docs/del.txt", (err) => {
    if (err) console.log(err);
  });
  console.log("file was deleted...");
}
