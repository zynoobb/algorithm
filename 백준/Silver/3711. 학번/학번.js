const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const testCase = [];
  const arr = data.map(Number);

  for (let i = 0; i < arr.length; i++) {
    const temp = arr.slice(i + 1, i + arr[i] + 1);

    testCase.push(temp);
    i += arr[i];
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  const leng = arr.length;

  let i = 1;
  while (true) {
    const obj = {};

    for (v of arr) {
      const rest = v % i;
      if (!obj[rest]) obj[rest] = true;
      else break;
    }

    if (Object.values(obj).length === leng) {
      return i;
    }
    i++;
  }
}

solution(input);
