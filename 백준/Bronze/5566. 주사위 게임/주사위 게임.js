const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);

  const arr = data.map(Number);
  const board = arr.slice(0, n);
  const diceRolls = arr.slice(n);

  let position = 1;
  let count = 0;

  for (let i = 0; i < m; i++) {
    position += diceRolls[i];

    if (position >= n) {
      count = i + 1;
      break;
    }

    position += board[position - 1];

    if (position >= n) {
      count = i + 1;
      break;
    }
  }

  console.log(count);
}

solution(input);
