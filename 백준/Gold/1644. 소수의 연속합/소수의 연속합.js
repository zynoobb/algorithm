const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  const isPrimesArr = Array.from({ length: N + 1 }, () => true);
  (isPrimesArr[0] = false), (isPrimesArr[1] = false);
  const primes = [];

  for (let i = 2; i <= N; i++) {
    if (isPrimesArr[i]) {
      primes.push(i);
      let j = 2;
      while (i * j <= N) {
        isPrimesArr[i * j] = false;
        j++;
      }
    }
  }

  let [left, right, sum, result] = [0, 0, 0, 0];

  while (right <= primes.length) {
    if (N == sum) result++;

    if (sum > N) {
      sum -= primes[left];
      left++;
    } else {
      sum += primes[right];
      right++;
    }
  }
  console.log(result);
}

solution(input);
