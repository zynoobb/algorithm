const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, M, R], ...edges] = data.map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);

  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const sortedGraph = graph.map((el) => el.sort((a, b) => a - b));

  const visited = Array.from({ length: N + 1 }, () => [-1, 0]);
  const stack = [[R, 0]];
  let order = 1;

  while (stack.length) {
    const [node, cnt] = stack.pop();
    if (visited[node][0] !== -1) continue;
    visited[node] = [cnt, order++];

    sortedGraph[node].forEach((next) => {
      if (visited[next][0] === -1) {
        stack.push([next, cnt + 1]);
      }
    });
  }
  visited.shift();

  const result = visited.reduce((acc, cur) => {
    return acc + cur[0] * cur[1];
  }, 0);

  console.log(result);
}

solution(input);
