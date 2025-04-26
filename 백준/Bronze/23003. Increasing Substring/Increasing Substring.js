const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const T = Number(data[0]);
  let idx = 1;

  for (let t = 1; t <= T; t++) {
    const N = Number(data[idx]);
    const S = data[idx + 1];
    idx += 2;

    const arr = [];
    let cnt = 1;
    arr.push(cnt);

    for (let i = 1; i < N; i++) {
      if (S.charCodeAt(i - 1) < S.charCodeAt(i)) {
        cnt++;
      } else {
        cnt = 1;
      }
      arr.push(cnt);
    }

    console.log(`Case #${t}: ${arr.join(" ")}`);
  }
}

solution(input);
