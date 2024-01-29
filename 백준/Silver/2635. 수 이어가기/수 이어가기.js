const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  let result = [];
  for (let i = N; i > 0; i--) {
    const storage = [N, i];

    while (true) {
      const a = storage.at(-2),
        b = storage.at(-1);

      if (0 > a - b) {
        if (storage.length > result.length) result = storage;
        break;
      } else storage.push(a - b);
    }
  }

  console.log(result.length);
  console.log(...result);
}

solution(input);
