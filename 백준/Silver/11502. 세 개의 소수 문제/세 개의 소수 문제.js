const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const isPrimes = erasto();
  const result = data.map((el) => act(+el, isPrimes));
  console.log(result.join("\n"));
}

function erasto() {
  const isPrimes = Array.from({ length: 1000 }, () => true);
  (isPrimes[0] = false), (isPrimes[1] = false);

  for (let i = 2; i < 1000; i++) {
    if (isPrimes[i]) {
      let j = 2;
      while (i * j < 1000) {
        isPrimes[i * j] = false;
        j++;
      }
    }
  }

  return isPrimes
    .map((el, idx) => {
      if (el) return idx;
    })
    .filter((x) => x);
}

function act(x, isPrimes) {
  for (let i = 0; i < isPrimes.length; i++) {
    for (let j = 0; j < isPrimes.length; j++) {
      for (let k = 0; k < isPrimes.length; k++) {
        const [a, b, c] = [isPrimes[i], isPrimes[j], isPrimes[k]];
        if (a + b + c === x) return `${a} ${b} ${c}`;
        if (a + b + c > 1000) break;
      }
    }
  }

  return 0;
}

solution(input);
