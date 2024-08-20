const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const words = [];

  data.forEach((el, idx) => {
    if (!isNaN(el)) {
      const temp = data.slice(idx + 1, idx + +el + 1);
      words.push(temp);
    }
  });

  words.pop();

  const result = words.map((list) => {
    return list.sort((a, b) => a.localeCompare(b))[0];
  });

  console.log(result.join("\n"));
}

solution(input);
