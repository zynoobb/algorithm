const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.map(Number);

  const primesList = Array.from({ length: N + 1 }, () => 0);
  (primesList[0] = 0), (primesList[1] = 0);

  let idx = 2;
  while (idx <= N) {
    if (!primesList[idx]) {
      for (let j = idx; j <= N; j += idx) {
        if (j % idx === 0) primesList[j] = Math.max(primesList[j], idx);
      }
    }
    idx++;
  }

  const result = primesList.filter((el) => el <= M).length - 1;
  console.log(result);
}

solution(input);
