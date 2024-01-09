const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const arr = data.map((el) => el.split(" ").map(Number));
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    const [_, K] = arr[i];
    const child = arr[i + 1].reduce((acc, cur) => {
      return acc + Math.floor(cur / K);
    }, 0);
    result.push(child);
  }

  console.log(result.join("\n"));
}

solution(input);
