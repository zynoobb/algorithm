const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const arr = data.map(Number);
  const max = Math.max(...arr);
  const primes = makingPrimes(max);

  const result = arr.map((el) => act(el, primes));
  console.log(result.join("\n"));
}

function makingPrimes(n) {
  const primes = Array.from({ length: n + 1 }, () => true);
  (primes[0] = false), (primes[1] = false);

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      let j = 2;
      while (i * j <= n) {
        primes[i * j] = false;
        j++;
      }
    }
  }

  return primes;
}

function act(x, primes) {
  let cnt = 0;
  for (let i = 1; i <= Math.floor(x / 2); i++) {
    if (primes[i] && primes[x - i]) cnt++;
  }

  return cnt;
}

solution(input);
