const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const [files, [cluster]] = data.map((el) => el.split(" ").map(Number));

  let result = 0;
  files.forEach((el) => {
    if (el !== 0) {
      result += Math.ceil(el / cluster) * cluster;
    }
  });

  console.log(result);
}

solution(input);
