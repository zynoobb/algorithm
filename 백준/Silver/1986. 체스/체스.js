const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], ...pieces] = data.map((el) => el.split(" ").map(Number));

  const board = Array.from({ length: n }, () => {
    return Array.from({ length: m }, () => false);
  });

  const piecesTable = {
    0: "queen",
    1: "knight",
    2: "pawn",
  };

  pieces.forEach((piece, i) => {
    if (piece[0] > 0) {
      for (let j = 1; j < piece.length; j += 2) {
        const [y, x] = [piece[j] - 1, piece[j + 1] - 1];
        board[y][x] = piecesTable[i];
      }
    }
  });

  const locationVerify = (x, y) => {
    return 0 <= x && x < m && 0 <= y && y < n;
  };

  const pieceExistVerify = (x, y) => {
    return typeof board[y][x] === "string";
  };

  const pieceFunction = {
    queen: (y, x) => {
      const queenMove = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];

      queenMove.forEach(([dx, dy]) => {
        let [nx, ny] = [dx + x, dy + y];
        while (locationVerify(nx, ny) && !pieceExistVerify(nx, ny)) {
          board[ny][nx] = true;
          (nx += dx), (ny += dy);
        }
      });
    },
    knight: (y, x) => {
      const knightMove = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
      ];

      knightMove.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (locationVerify(nx, ny) && !pieceExistVerify(nx, ny)) {
          board[ny][nx] = true;
        }
      });
    },
    pawn: (y, x) => {},
  };

  board.forEach((arr, i) => {
    arr.forEach((_, j) => {
      if (board[i][j] in pieceFunction) {
        pieceFunction[board[i][j]](i, j);
      }
    });
  });

  let result = 0;
  board.forEach((arr) => {
    arr.forEach((el) => {
      if (!el) result++;
    });
  });

  console.log(result);
}

solution(input);
