const fs = require("fs");

fs.readFile("week 1/a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Starting expensive operation...");
let sum = 0;
for (let i = 0; i < 9334441444; i++) {
  sum += i;
}
console.log("Expensive operation finished.");
