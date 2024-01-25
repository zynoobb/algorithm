const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const matrix = data.map((el) => el.split(" ").map(Number));
  const empty = [];

  matrix.forEach((row, i) => {
    row.forEach((v, j) => {
      if (v === 0) empty.push([j, i]);
    });
  });

  function verify(x, y, cnt) {
    // 세로 검증
    for (let i = 0; i < 9; i++) {
      if (cnt === matrix[y][i]) return false;
    }

    // 가로 검증
    for (let i = 0; i < 9; i++) {
      if (cnt === matrix[i][x]) return false;
    }

    // 범위 검증
    const dx = Math.floor(x / 3) * 3,
      dy = Math.floor(y / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++)
        if (cnt === matrix[dy + i][dx + j]) return false;
    }

    return true;
  }

  function DFS(cnt) {
    if (cnt === empty.length) {
      console.log(matrix.map((el) => el.join(" ")).join("\n"));
      process.exit(0);
    }

    const [x, y] = empty[cnt];
    for (let i = 1; i <= 9; i++) {
      if (verify(x, y, i)) {
        matrix[y][x] = i;
        DFS(cnt + 1);
        matrix[y][x] = 0;
      }
    }
  }

  DFS(0);
}

solution(input);
