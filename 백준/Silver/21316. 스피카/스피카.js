const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const edges = data.map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: 13 }, () => []);

  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  function act(x) {
    const set = new Set();
    graph[x].forEach((leaf) => {
      set.add(graph[leaf].length);
    });

    return set.size;
  }

  for (let i = 1; i <= 12; i++) {
    const t = act(i);
    if (t === 3) {
      console.log(i);
      return;
    }
  }
}

solution(input);
