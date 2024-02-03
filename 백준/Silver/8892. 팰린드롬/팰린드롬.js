const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const testCase = [];
  data.forEach((el, idx) => {
    if (!isNaN(el)) testCase.push(data.slice(idx + 1, +el + idx + 1));
  });

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const K = [arr[i] + arr[j], arr[j] + arr[i]];
      for (let k = 0; k < 2; k++) if (palindromeVerify(K[k])) return K[k];
    }
  }
  return 0;
}

function palindromeVerify(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

solution(input);
