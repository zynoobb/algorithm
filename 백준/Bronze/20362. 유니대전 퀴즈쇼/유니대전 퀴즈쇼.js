const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, corrector], ...rest] = data.map((el) => el.split(" "));

  const idx = rest.map((el) => el[0]).indexOf(corrector);
  const correct = rest[idx][1];

  const result = rest
    .map((el) => el[1])
    .slice(0, idx)
    .filter((answer) => answer === correct).length;

  console.log(result);
}

solution(input);
