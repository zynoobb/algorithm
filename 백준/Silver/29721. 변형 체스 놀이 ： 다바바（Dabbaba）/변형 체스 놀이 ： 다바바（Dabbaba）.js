const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[size, _], ...dababa] = data.map((el) => el.split(" ").map(Number));

  const moveSet = new Set();
  const existSet = new Set();

  dababa.forEach(([x, y]) => {
    existSet.add(`${x}:${y}`);
  });

  const move = [
    [0, 2],
    [0, -2],
    [-2, 0],
    [2, 0],
  ];

  const moveVerify = (nx, ny) => {
    return 0 < nx && nx <= size && 0 < ny && ny <= size;
  };

  dababa.forEach(([x, y]) => {
    move.forEach(([dx, dy]) => {
      const [nx, ny] = [x + dx, y + dy];
      const verify = moveVerify(nx, ny);
      if (verify) {
        moveSet.add(`${nx}:${ny}`);
      }
    });
  });

  const exists = [...existSet];
  exists.forEach((el) => {
    if (moveSet.has(el)) moveSet.delete(el);
  });

  console.log(moveSet.size);
}

solution(input);
