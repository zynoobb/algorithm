const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);

  const dists = Array.from({ length: 10 }, () => 0);

  for (let i = 0; i < N; i++) {
    for (let j = M - 1; j >= 0; j--) {
      const k = data[i][j];
      if (!isNaN(k)) {
        dists[k] = data[i].indexOf(k);
        break;
      }
    }
  }

  const result = Array.from({ length: 10 }, () => 0);

  let rank = 1;
  while (true) {
    const max = Math.max(...dists);
    if (max === 0) break;

    const filtered = dists.reduce((acc, cur, idx) => {
      if (cur === max) acc.push(idx);
      return acc;
    }, []);

    filtered.forEach((el) => {
      result[el] = rank;
      dists[el] = 0;
    });
    rank++;
  }

  console.log(result.slice(1).join("\n"));
}

solution(input);
