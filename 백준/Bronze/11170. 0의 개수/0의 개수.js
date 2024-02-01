const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  const [n, m] = str.split(" ").map(Number);

  let cnt = 0;
  for (let i = n; i <= m; i++) {
    const k = String(i)
      .split("")
      .filter((el) => el === "0").length;

    cnt += k;
  }

  return cnt;
}

solution(input);
