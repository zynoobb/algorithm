const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], ...matrix] = data.map((el) => el.split(" ").map(Number));

  const dp = Array.from({ length: N }, () => {
    return Array.from({ length: N }, () => 0);
  });

  const directions = [
    [0, 1],
    [1, 0],
  ];

  const locationVerify = (x, y) => 0 <= x && x < N && 0 <= y && y < N;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === 0 && j === 0) continue;
      const next = directions.map(([dx, dy]) => {
        const [px, py] = [j - dx, i - dy];

        if (locationVerify(px, py)) {
          const dif =
            matrix[i][j] >= matrix[py][px]
              ? matrix[i][j] - matrix[py][px] + 1
              : 0;
          return dp[py][px] + dif;
        } else return Infinity;
      });

      dp[i][j] = Math.min(...next);
    }
  }

  console.log(dp[N - 1][N - 1]);
}

solution(input);
