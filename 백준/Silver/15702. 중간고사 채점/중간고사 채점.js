const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, __], scores, ...matrix] = data.map((el) =>
    el.split(" ").map((v) => (!isNaN(v) ? Number(v) : v))
  );

  matrix.sort((a, b) => a[0] - b[0]);

  let v = Infinity,
    max = 0;

  matrix.forEach((el) => {
    const [k, ...rest] = el;
    const temp = rest.reduce((acc, cur, idx) => {
      return acc + (cur === "O" ? scores[idx] : 0);
    }, 0);

    if (temp > max) {
      max = temp;
      v = k;
    } else if (temp === max) v = Math.min(v, k);
  });

  console.log(v, max);
}

solution(input);
