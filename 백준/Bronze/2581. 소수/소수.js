const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.map(Number);
  const limit = 10001;
  const isPrimes = Array.from({ length: limit }, () => true);
  (isPrimes[0] = false), (isPrimes[1] = false);

  for (let i = 2; i < limit; i++) {
    if (isPrimes[i]) {
      let j = 2;
      while (i * j <= limit) {
        isPrimes[i * j] = false;
        j++;
      }
    }
  }

  const storage = [];

  for (let i = N; i <= M; i++) {
    if (isPrimes[i]) storage.push(i);
  }

  if (!storage.length) console.log(-1);
  else {
    console.log(storage.reduce((ac, cur) => ac + cur));
    console.log(Math.min(...storage));
  }
}

solution(input);
