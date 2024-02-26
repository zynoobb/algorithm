function solution(places) {
  return places.map((el) => act(el));
}

function act(arr) {
  const matrix = arr.map((el) => el.split(""));

  function BFS(x, y) {
    const visited = Array.from({ length: 5 }, () => {
      return Array.from({ length: 5 }, () => false);
    });
    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    const verify = (x, y) => 0 <= x && x < 5 && 0 <= y && y < 5;
    const queue = [[x, y, 0]];
    let queueIdx = 0;

    while (queueIdx < queue.length) {
      const [x, y, cnt] = queue[queueIdx++];
      if (cnt > 2) return 1;
      if (matrix[y][x] === "P") return 0;
      if (visited[y][x]) continue;
      visited[y][x] = true;

      directions.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (verify(nx, ny) && !visited[ny][nx] && matrix[ny][nx] !== "X") {
          queue.push([nx, ny, cnt + 1]);
        }
      });
    }

    return 1;
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === "P") {
        matrix[i][j] = "O";
        const temp = BFS(j, i);
        if (!temp) return 0;
      }
    }
  }

  return 1;
}
