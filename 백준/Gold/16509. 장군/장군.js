const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[sy, sx], [ty, tx]] = data.map((el) => el.split(" ").map(Number));

  const visited = Array.from({ length: 10 }, () => {
    return Array.from({ length: 9 }, () => 0);
  });

  const directions = [
    [2, 3],
    [3, 2],
    [-2, 3],
    [-3, 2],
    [2, -3],
    [3, -2],
    [-2, -3],
    [-3, -2],
  ];
  function locationVerify(x, y) {
    return 9 > x && x >= 0 && 10 > y && y >= 0;
  }

  function moveVerify(dx, dy, nx, ny) {
    const a = dx > 0 ? -1 : 1,
      b = dy > 0 ? -1 : 1;

    let q = Math.abs(dx) == 3 ? 3 : 2,
      w = Math.abs(dy) == 3 ? 3 : 2;

    while (q !== 0 && w !== 0) {
      (nx += a), (ny += b), q--, w--;

      if (nx == tx && ny === ty) return false;
    }

    if (q == 0) {
      ny += b;
      if (nx == tx && ny === ty) return false;
    } else {
      nx += a;
      if (nx == tx && ny === ty) return false;
    }

    return true;
  }

  const queue = [[sx, sy, 1]];
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [x, y, cnt] = queue[queueIdx++];

    if (x === tx && y === ty) {
      console.log(cnt - 1);
      return;
    }
    if (visited[y][x] !== 0) continue;
    visited[y][x] = cnt;

    directions.forEach(([dx, dy]) => {
      const [nx, ny] = [dx + x, dy + y];

      if (locationVerify(nx, ny) && moveVerify(dx, dy, nx, ny)) {
        queue.push([nx, ny, cnt + 1]);
      }
    });
  }

  console.log(-1);
}

solution(input);
