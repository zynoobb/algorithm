const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = data[0];

  const arr = [];
  function DFS(n) {
    arr.push(n);
    if (n.length > N.length) return;

    DFS(n + "4");
    DFS(n + "7");
  }

  DFS("4");
  DFS("7");

  const sorted = arr.map(Number).sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (+N >= sorted[i]) {
      console.log(sorted[i]);
      return;
    }
  }
}

solution(input);
