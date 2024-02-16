const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const edges = data.map((el) => el.split(" ").map(Number));
  const [n, m] = edges.shift();

  const graph = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => Infinity);
  });

  edges.forEach(([from, to]) => {
    graph[from - 1][to - 1] = 1;
    graph[to - 1][from - 1] = 1;
  });

  for (let i = 0; i < n; i++) graph[i][i] = 0;

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] > 6) {
        console.log("Big World!");
        return;
      }
    }
  }

  console.log("Small World!");
}

solution(input);
