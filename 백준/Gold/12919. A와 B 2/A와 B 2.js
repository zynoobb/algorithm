const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data;

  let result = 0;
  function recursive(x) {
    if (x === a) {
      result = 1;
      return;
    }

    if (!x.length) return;

    if (x.at(-1) === "A") recursive(x.slice(0, -1));
    if (x.at(0) === "B") recursive(x.slice(1).split("").reverse().join(""));
  }

  recursive(b);

  console.log(result);
}

solution(input);
