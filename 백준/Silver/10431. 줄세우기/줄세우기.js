const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const result = data.map((el, idx) => `${idx + 1} ${act(el)}`);
  console.log(result.join("\n"));
}

function act(str) {
  const arr = str.split(" ").map(Number);
  arr.shift();

  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        cnt++;
      }
    }
  }

  return cnt;
}

solution(input);
