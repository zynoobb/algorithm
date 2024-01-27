const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const matrix = data.map((el) => el.split(" ")).flat();
  const table = {
    w: "chunbae",
    b: "nabi",
    g: "yeongcheol",
  };

  let idx = 0;
  while (true) {
    if (table[matrix[idx]]) {
      console.log(table[matrix[idx]]);
      return;
    }

    idx++;
  }
}

solution(input);
