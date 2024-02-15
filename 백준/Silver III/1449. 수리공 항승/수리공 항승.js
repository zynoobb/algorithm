const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], arr] = data.map((el) => el.split(" ").map(Number));
  arr.sort((a, b) => a - b);

  let result = 1;
  let tape = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= tape && tape + m > arr[i]) continue;
    else {
      result++;
      tape = arr[i];
    }
  }

  console.log(result);
}

solution(input);
