const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const [numbers, opts] = data.map((el) => el.split(" ").map(Number));
  const result = [];

  const table = {
    0: (a, b) => a + b,
    1: (a, b) => a - b,
    2: (a, b) => a * b,
    3: (a, b) => parseInt(a / b),
  };

  function DFS(cnt, depth, opts) {
    if (depth === N) {
      result.push(cnt);
      return;
    }

    opts.forEach((op, idx) => {
      if (op) {
        const total = table[idx](cnt, numbers[depth]);
        const newOpts = [...opts];
        newOpts[idx]--;
        DFS(total, depth + 1, newOpts);
      }
    });
  }

  DFS(numbers[0], 1, opts);

  const max = Math.max(...result) === 0 ? 0 : Math.max(...result);
  const min = Math.min(...result) === 0 ? 0 : Math.min(...result);

  console.log(max);
  console.log(min);
}

solution(input);
