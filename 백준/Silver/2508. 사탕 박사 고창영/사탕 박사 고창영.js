const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const testCase = [];
  let temp = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i] == "") {
      testCase.push(temp);
      temp = [];
    } else temp.push(data[i]);

    if (i == data.length - 1) testCase.push(temp);
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  const [N, M] = arr.shift().split(" ").map(Number);
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === "o") {
        if (
          0 < j &&
          j < M - 1 &&
          arr[i][j - 1] === ">" &&
          arr[i][j + 1] === "<"
        )
          cnt++;

        if (
          0 < i &&
          i < N - 1 &&
          arr[i - 1][j] === "v" &&
          arr[i + 1][j] === "^"
        )
          cnt++;
      }
    }
  }

  return cnt;
}

solution(input);
