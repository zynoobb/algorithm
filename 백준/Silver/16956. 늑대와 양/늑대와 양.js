const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [R, C] = data.shift().split(" ").map(Number);
  const arr = data.map((el) => el.split(""));

  const verify = (x, y) => {
    return 0 <= x && x < C && 0 <= y && y < R;
  };
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] === "W") {
        for (let k = 0; k < directions.length; k++) {
          const [dx, dy] = directions[k];
          const [nx, ny] = [dx + j, dy + i];
          if (!verify(nx, ny)) continue;

          if (arr[ny][nx] == "S") {
            console.log(0);
            return;
          } else if (arr[ny][nx] == ".") arr[ny][nx] = "D";
        }
      }
    }
  }

  const result = arr.map((el) => el.join(""));
  console.log(1);
  console.log(result.join("\n"));
}

solution(input);
