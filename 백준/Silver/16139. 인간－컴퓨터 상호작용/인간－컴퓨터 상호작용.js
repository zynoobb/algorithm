const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [str, n, ...query] = data;

  const table = {};
  table[-1] = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < str.length; i++) {
    table[i] = [...table[i - 1]];
    const char = str[i].charCodeAt() - 97;
    table[i][char]++;
  }

  const result = query.map((el) => {
    const [alp, s, e] = el.split(" ").map((x) => (!isNaN(x) ? +x : x));
    const char = alp.charCodeAt() - 97;
    return table[e][char] - table[s - 1][char];
  });

  console.log(result.join("\n"));
}

solution(input);
