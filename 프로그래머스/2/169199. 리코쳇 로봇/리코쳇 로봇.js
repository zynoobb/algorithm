function solution(board) {
  const Y = board.length,
    X = board[0].length;

  let start, end;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "R") start = [i, j];
      if (board[i][j] == "G") end = [i, j];
    }
  }

  return BFS(board, start, end, X, Y);
}

function BFS(board, start, end, X, Y) {
  const visited = Array.from({ length: Y }, () => {
    return Array.from({ length: X }, () => 0);
  });

  const queue = [start.concat(1)];
  let queueIdx = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const verify = (x, y) => {
    return 0 <= x && x < X && 0 <= y && y < Y && board[y][x] != "D";
  };

  const moving = (location, direction) => {
    const [y, x] = location;
    const [dy, dx] = direction;
    let i = 1;
    let nextLocation = [y, x];
    while (true) {
      const [ny, nx] = [dy * i + y, dx * i + x];
      if (!verify(nx, ny)) break;
      else nextLocation = [ny, nx];
      i++;
    }

    const [ny, nx] = nextLocation;
    if ((nx == x && ny == y) || visited[ny][nx]) return false;
    else return [ny, nx];
  };

  while (queueIdx < queue.length) {
    const [y, x, dist] = queue[queueIdx++];

    const [ty, tx] = end;
    if (x == tx && y == ty) return dist - 1;

    directions.forEach((el) => {
      const next = moving([y, x], el);
      if (next) {
        const [ny, nx] = next;
        visited[ny][nx] = dist + 1;
        queue.push([ny, nx, dist + 1]);
      }
    });
  }

  return -1;
}