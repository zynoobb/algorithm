const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, T], ...arr] = data.map((el) => el.split(" ").map(Number));
  let result = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const [s, l, c] = arr[i];
    if (T > s + l * (c - 1)) continue;

    for (let j = 0; j < c; j++) {
      const temp = s + l * j;
      if (temp >= T) {
        result = Math.min(result, temp);
        break;
      }
    }
  }

  console.log(result === Infinity ? -1 : result - T);
}

solution(input);
