const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const [dists, oils] = data.map((el) => el.split(" ").map(Number));

  let result = dists[0] * oils[0];
  let price = oils[0];

  for (let i = 1; i < N - 1; i++) {
    if (price > oils[i]) price = oils[i];

    result += price * dists[i];
  }

  console.log(result);
}

solution(input);
