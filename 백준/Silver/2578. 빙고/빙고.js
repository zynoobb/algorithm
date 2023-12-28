const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));

  const table = {};
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      table[arr[i][j]] = [i, j];
    }
  }
  const order = arr.slice(5).flat();
  const matrix = Array.from({ length: 5 }, () => {
    return Array.from({ length: 5 }, () => false);
  });

  function verify() {
    let bingo = 0;
    let z1 = 0,
      z2 = 0;
    for (let i = 0; i < 5; i++) {
      let x = 0,
        y = 0;
      if (matrix[i][i]) z1++;
      if (matrix[i][4 - i]) z2++;

      for (let j = 0; j < 5; j++) {
        if (matrix[i][j]) x++;
        if (matrix[j][i]) y++;
      }
      if (x == 5) bingo++;
      if (y == 5) bingo++;
    }
    if (z1 == 5) bingo++;
    if (z2 == 5) bingo++;

    return bingo;
  }

  for (let i = 0; i < order.length; i++) {
    const [y, x] = table[order[i]];
    matrix[y][x] = true;
    const bingos = verify();
    if (bingos >= 3) {
      console.log(i + 1);
      break;
    }
  }
}

solution(input);
