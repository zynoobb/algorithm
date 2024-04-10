const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = data.map((str) => {
    while (str.includes("BUG")) {
      str = str.replaceAll("BUG", "");
    }
    return str;
  });

  console.log(result.join("\n"));
}

solution(input);
