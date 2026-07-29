const fs = require("fs");

fs.writeFile("output.txt", "Hello, world", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  }

  console.log("File written successfully.");
});
