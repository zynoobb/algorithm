const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];
  const arr = makingPrimes();

  for (let i = n; i < arr.length; i++) {
    if (arr[i]) {
      const reversed = Number(String(i).split("").reverse().join(""));
      if (i === reversed) {
        console.log(i);
        return;
      }
    }
  }
}

function makingPrimes() {
  let limit = 1010000;
  const arr = Array.from({ length: limit }, () => true);
  (arr[0] = false), (arr[1] = false);

  for (let i = 2; i < Math.sqrt(limit) + 1; i++) {
    if (arr[i]) {
      let j = 2;
      while (i * j <= limit) {
        arr[i * j] = false;
        j++;
      }
    }
  }
  return arr;
}

solution(input);
