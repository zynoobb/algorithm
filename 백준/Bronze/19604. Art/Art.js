const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  let xMin = Infinity,
    xMax = 0,
    yMin = Infinity,
    yMax = 0;

  data.forEach((el) => {
    const [x, y] = el.split(",").map(Number);

    xMin = x > xMin ? xMin : x;
    xMax = x > xMax ? x : xMax;
    yMin = y > yMin ? yMin : y;
    yMax = y > yMax ? y : yMax;
  });

  console.log(`${xMin - 1},${yMin - 1}`);
  console.log(`${xMax + 1},${yMax + 1}`);
}

solution(input);
