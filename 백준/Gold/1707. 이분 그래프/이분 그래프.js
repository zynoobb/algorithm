const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const testCase = [];
  for (let i = 1; i < data.length; i++) {
    const [_, e] = data[i].split(" ").map(Number);
    testCase.push(data.slice(i, e + i + 1));
    i += e;
  }

  act(testCase[0]);
  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  const edges = arr.map((el) => el.split(" ").map(Number));
  const [v, e] = edges.shift();

  const visited = Array.from({ length: v + 1 }, () => 0);
  const graph = Array.from({ length: v + 1 }, () => []);
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  function DFS(node) {
    const stack = [node];

    while (stack.length) {
      const node = stack.pop();

      for (let i = 0; i < graph[node].length; i++) {
        const next = graph[node][i];
        if (!visited[next]) {
          visited[next] = visited[node] === 1 ? -1 : 1;
          stack.push(next);
        } else if (visited[node] === visited[next]) return false;
      }
    }
    return true;
  }

  for (let i = 1; i <= v; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      const temp = DFS(i);
      if (!temp) return "NO";
    }
  }

  return "YES";
}

solution(input);
