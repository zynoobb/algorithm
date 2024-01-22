const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[Y, X], ...graph] = data.map((el) => el.split(" ").map(Number));
  const virus = [];
  let result = 0;

  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (graph[i][j] === 2) virus.push([j, i]);
    }
  }

  function BFS() {
    const matrix = JSON.parse(JSON.stringify(graph));
    const queue = JSON.parse(JSON.stringify(virus));

    let queueIdx = 0;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    while (queueIdx < queue.length) {
      const [x, y] = queue[queueIdx++];

      for (let i = 0; i < 4; i++) {
        const [dx, dy] = directions[i];
        const [nx, ny] = [dx + x, dy + y];

        if (0 <= nx && nx < X && 0 <= ny && ny < Y && !matrix[ny][nx]) {
          matrix[ny][nx] = 2;
          queue.push([nx, ny]);
        }
      }
    }

    let safeArea = 0;
    for (let i = 0; i < Y; i++) {
      for (let j = 0; j < X; j++) {
        if (matrix[i][j] === 0) safeArea++;
      }
    }

    if (safeArea > result) result = safeArea;
  }

  function makeWalls(cnt) {
    if (cnt === 3) {
      BFS();
      return;
    }

    for (let i = 0; i < Y; i++) {
      for (let j = 0; j < X; j++) {
        if (graph[i][j] == 0) {
          graph[i][j] = 1;
          makeWalls(cnt + 1);
          graph[i][j] = 0;
        }
      }
    }
  }

  makeWalls(0);

  console.log(result);
}

solution(input);
