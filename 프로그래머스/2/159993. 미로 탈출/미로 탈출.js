function solution(maps) {
  const matrix = maps.map((el) => el.split(""));
  const json_matrix = JSON.parse(JSON.stringify(matrix));
  let start, transit, end;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "S") start = [j, i];
      else if (matrix[i][j] === "L") transit = [j, i];
      else if (matrix[i][j] === "E") end = [j, i];
    }
  }
  result = BFS(matrix, start, transit) + BFS(json_matrix, transit, end);
  return result ? result : -1;
}

function BFS(matrix, from, to) {
  const [[sx, sy], [ex, ey]] = [from, to];
  matrix[sy][sx] = 0;

  const queue = [[sx, sy, 0]];
  while (queue.length) {
    const [x, y, dist] = queue.shift();

    const direction = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let i = 0; i < direction.length; i++) {
      const [dx, dy] = direction[i];
      const [nx, ny] = [dx + x, dy + y];
      if (verify(nx, ny, matrix[0].length, matrix.length, matrix)) {
        if (nx == ex && ny == ey) {
          return dist + 1;
        }

        matrix[ny][nx] = dist + 1;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
}

function verify(x, y, X, Y, matrix) {
  return (
    0 <= x &&
    x < X &&
    0 <= y &&
    y < Y &&
    isNaN(matrix[y][x]) &&
    matrix[y][x] !== "X"
  );
}
