const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);

  let result = 0;

  data.forEach((el) => {
    const t = el.split("").filter((x) => x === "O").length;
    if (t > m / 2) result++;
  });

  console.log(result);
}

solution(input);
