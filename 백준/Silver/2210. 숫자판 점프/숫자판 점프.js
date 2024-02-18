const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const matrix = data.map((el) => el.split(" "));

  const verify = (x, y) => 5 > x && x >= 0 && 5 > y && y >= 0;
  const set = new Set();
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function DFS(str, x, y, cnt) {
    if (cnt === 6) {
      set.add(str);
      return;
    }

    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];
      if (verify(nx, ny)) {
        DFS(str + matrix[ny][nx], nx, ny, cnt + 1);
      }
    });
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      DFS(matrix[i][j], j, i, 1);
    }
  }

  console.log(set.size);
}

solution(input);
