const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    let temp = "";
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] !== " ") temp += data[i][j];
      else {
        const t = Number(temp.split("").reverse().join(""));
        arr.push(t);
        temp = "";
      }

      if (j === data[i].length - 1) {
        const t = Number(temp.split("").reverse().join(""));
        arr.push(t);
      }
    }
  }

  const n = arr.shift();

  console.log(arr.sort((a, b) => a - b).join("\n"));
}

solution(input);
