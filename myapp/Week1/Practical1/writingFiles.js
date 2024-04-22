const fs = require("node:fs");

const content = "Some Content!";

fs.writeFile("/Users/joe/test.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
  }
});
