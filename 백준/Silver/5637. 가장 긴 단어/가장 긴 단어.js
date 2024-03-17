const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const words = data
    .join(" ")
    .split(" ")
    .filter((el) => el !== "");

  words.pop();
  let max = 0;
  let result = null;

  const pattern = /[^a-zA-Z-]/g;
  words.forEach((el) => {
    const word = el.replace(pattern, "");
    if (word.length > max) {
      max = word.length;
      result = word;
    }
  });

  console.log(result.toLowerCase());
}

solution(input);
