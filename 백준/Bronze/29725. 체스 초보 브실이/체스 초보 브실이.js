const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data.join("");

  const table = {
    k: 0,
    p: 1,
    n: 3,
    b: 3,
    r: 5,
    q: 9,
  };

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const t = str[i];
    if (t === ".") continue;
    else {
      result += t === t.toLowerCase() ? -1 * table[t] : table[t.toLowerCase()];
    }
  }

  console.log(result);
}

solution(input);
