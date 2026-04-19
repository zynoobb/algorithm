const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, _, ...temp] = data.map((el) => (isNaN(el) ? el : +el));
  const info = temp.map((el) => el.split(" ").map((x) => (isNaN(x) ? x : +x)));

  const mapping = { A: 0, B: 1, C: 2, D: 3 };
  const graph = Array.from({ length: 4 }, () => []);

  info.forEach(([from, to, p]) => {
    graph[mapping[from]].push([mapping[to], parseFloat(p)]);
  });

  let prob = Array.from({ length: 4 }, () => 0.25);

  for (let i = 0; i < n; i++) {
    const next = [0, 0, 0, 0];

    for (let j = 0; j < 4; j++) {
      for (const [to, p] of graph[j]) {
        next[to] += prob[j] * p;
      }
    }
    prob = next;
  }

  console.log(prob.map((el) => (el * 100).toFixed(2)).join("\n"));
}

solution(input);
