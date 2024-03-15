const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const primes = primesMaker(N);

  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[0] = 1;

  for (let coin of primes) {
    for (let i = coin; i < N + 1; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % 123456789;
    }
  }

  console.log(dp[N]);
}

function primesMaker(n) {
  const isPrimes = Array.from({ length: n + 1 }, () => true);
  (isPrimes[0] = false), (isPrimes[1] = false);

  for (let i = 2; i < n + 1; i++) {
    if (isPrimes[i]) {
      let j = 2;
      while (n + 1 > i * j) {
        isPrimes[i * j] = false;
        j++;
      }
    }
  }

  return isPrimes.map((el, idx) => (el ? idx : 0)).filter((x) => x);
}

solution(input);
