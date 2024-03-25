const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, K], arr] = data.map((el) => el.split(" ").map(Number));

  const grade = [4, 11, 23, 40, 60, 77, 89, 96, 100];

  const result = arr.map((el) => {
    const t = Math.floor((el * 100) / N);
    let cnt = 0;
    while (grade[cnt] < t) cnt++;
    return cnt + 1;
  });

  console.log(...result);
}

solution(input);
