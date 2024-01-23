const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);
  const antic = "antic";
  let total = transform(antic);
  const words = data.map((el) => transform(el));

  let result = 0;

  function DFS(idx, cnt) {
    if (cnt === M - 5) {
      const sum = words.filter((el) => (total & el) === el).length;
      result = Math.max(result, sum);
      return;
    }

    for (let i = idx; i < 26; i++) {
      if (total & (1 << i)) continue;
      total |= 1 << i;
      DFS(i, cnt + 1);
      total &= ~(1 << i);
    }
  }

  DFS(0, 0);

  console.log(result);
}

function transform(str) {
  let binary = 0;
  for (let i = 0; i < str.length; i++) {
    const t = str[i].charCodeAt() - 97;
    binary |= 1 << t;
  }

  return binary;
}

solution(input);
