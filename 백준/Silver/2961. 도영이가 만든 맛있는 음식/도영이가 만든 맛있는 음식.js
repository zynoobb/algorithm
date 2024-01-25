const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const arr = data.map((el) => el.split(" ").map(Number));
  const visited = Array.from({ length: N }, () => false);
  let result = Infinity;

  function DFS(sour, bitter, depth) {
    for (let i = depth; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        const nextSour = sour * arr[i][0];
        const nextBitter = bitter + arr[i][1];
        result = Math.min(result, Math.abs(nextSour - nextBitter));
        DFS(nextSour, nextBitter, depth + 1);
        visited[i] = false;
      }
    }
  }

  DFS(1, 0, 0);

  console.log(result);
}

solution(input);
