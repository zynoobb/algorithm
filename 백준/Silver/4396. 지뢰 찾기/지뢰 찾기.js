const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  const mines = data.slice(0, N),
    dig = data.slice(N);

  const result = Array.from({ length: N }, () => {
    return Array.from({ length: N }, () => ".");
  });

  const verify = (x, y) => 0 <= x && x < N && 0 <= y && y < N;

  function findMines(x, y) {
    if (mines[y][x] === "*") return -1;

    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 1],
      [1, 0],
    ];

    let cnt = 0;
    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];
      if (verify(nx, ny) && mines[ny][nx] === "*") cnt++;
    });

    return cnt;
  }

  let gameOverToggle = false;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dig[i][j] === "x") {
        const k = findMines(j, i);
        result[i][j] = k;
        if (k === -1) gameOverToggle = true;
      }
    }
  }

  function gameOver() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (mines[i][j] === "*") result[i][j] = "*";
      }
    }
  }

  if (gameOverToggle) gameOver();
  console.log(result.map((el) => el.join("")).join("\n"));
}

solution(input);
