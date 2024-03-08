const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const T = +data.pop();
  const [[N, M], ...arr] = data.map((el) => el.split(" ").map(Number));
  const storage = [];

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      const temp = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          temp.push(arr[k][l]);
        }
      }

      temp.sort((a, b) => a - b);
      storage.push(temp[4]);
    }
  }

  console.log(storage.filter((el) => el >= T).length);
}

solution(input);
