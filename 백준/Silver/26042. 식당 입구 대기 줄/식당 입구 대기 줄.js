const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  let queueSize = 0,
    maxSize = 0,
    last = Infinity;

  data.forEach((el) => {
    const [a, b] = el.split(" ");
    if (a === "1") {
      queueSize++;
      if (queueSize > maxSize) {
        maxSize = queueSize;
        last = b;
      } else if (queueSize === maxSize) {
        last = Math.min(last, b);
      }
    } else queueSize--;
  });

  console.log(maxSize, last);
}

solution(input);
