const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const K = +data.shift();

  const total = [];
  let [x, y, xIdx, yIdx] = [0, 0, null, null];

  data.forEach((el, idx) => {
    const [n, dist] = el.split(" ").map(Number);
    if (n == 1 || n == 2) {
      if (dist > x) {
        x = dist;
        xIdx = idx;
      }
    } else {
      if (dist > y) {
        y = dist;
        yIdx = idx;
      }
    }
    total.push(dist);
  });

  const indexVerify = (x) => {
    if (0 > x) return total.length - 1;
    else if (x >= total.length) return 0;
    else return x;
  };

  const sx = Math.abs(
    total[indexVerify(yIdx - 1)] - total[indexVerify(yIdx + 1)]
  );

  const sy = Math.abs(
    total[indexVerify(xIdx - 1)] - total[indexVerify(xIdx + 1)]
  );

  console.log((x * y - sx * sy) * K);
}

solution(input);
