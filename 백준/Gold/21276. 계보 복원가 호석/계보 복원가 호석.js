const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, names, _, ...edges] = data.map((el) => (!isNaN(el) ? +el : el));

  const table = {};
  const reverseTable = {};
  names.split(" ").forEach((el, idx) => {
    table[el] = idx + 1;
    reverseTable[idx + 1] = el;
  });
  const ranked = Array.from({ length: N + 1 }, () => 0);
  const graph = Array.from({ length: N + 1 }, () => []);

  edges.forEach((el) => {
    const [x, y] = el.split(" ");
    graph[table[y]].push(table[x]);
    ranked[table[x]]++;
  });

  const queue = [],
    roots = [],
    leaf = Array.from({ length: N + 1 }, () => []);
  let queueIdx = 0;

  for (let i = 1; i <= N; i++) {
    if (!ranked[i]) {
      queue.push(i);
      roots.push(reverseTable[i]);
    }
  }

  while (queueIdx < queue.length) {
    const node = queue[queueIdx++];

    graph[node].forEach((next) => {
      ranked[next]--;
      if (!ranked[next]) {
        queue.push(next);
        leaf[node].push(next);
      }
    });
  }

  const namesSort = names
    .split(" ")
    .sort()
    .map((name) => table[name]);

  const result = namesSort.map((el) => {
    const root = reverseTable[el];
    const leafNum = leaf[el].length;
    const leafs = leaf[el].map((x) => reverseTable[x]).sort();

    return [root, leafNum, ...leafs].join(" ");
  });

  console.log(roots.length);
  console.log(...roots.sort());
  console.log(result.join("\n"));
}

solution(input);
