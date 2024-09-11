const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, _], ...units] = data.map((el) => el.split(" ").map(Number));

  const roots = {};
  for (let i = 1; i <= n; i++) {
    roots[i] = i;
  }

  const find = (x) => {
    if (roots[x] !== x) {
      roots[x] = find(roots[x]);
    }
    return roots[x];
  };

  const union = (x, y) => {
    const [a, b] = [find(x), find(y)];
    if (x < y) roots[b] = a;
    else roots[a] = b;
  };

  let total = 0;
  const sorted = units.sort((a, b) => a[2] - b[2]);

  sorted.forEach(([s, e, w]) => {
    if (find(s) !== find(e)) {
      total += w;
      union(s, e);
    }
  });

  console.log(total);
}

solution(input);
