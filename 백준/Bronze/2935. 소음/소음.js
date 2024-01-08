const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b, c] = data;

  if (b == "*") console.log(a + "0".repeat(c.length - 1));
  else {
    const x = Math.max(a.length, c.length);
    const y = Math.min(a.length, c.length);

    let result = new Array(x).fill("0");

    if (x == y) result[0] = "2";
    else {
      result[0] = "1";
      result[x - y] = "1";
    }

    console.log(result.join(""));
  }
}

solution(input);
