const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data[0].split(" ").map(Number);

  const isPrimes = Array.from({ length: m + 1 }, () => true);
  (isPrimes[0] = false), (isPrimes[1] = false);
  for (let i = 2; i <= m; i++) {
    if (isPrimes[i]) {
      let j = 2;
      while (i * j <= m) {
        isPrimes[i * j] = false;
        j++;
      }
    }
  }
  const result = [];
  for (let i = n; i <= m; i++) {
    if (isPrimes[i]) result.push(i);
  }
  console.log(result.join("\n"));
}

solution(input);
