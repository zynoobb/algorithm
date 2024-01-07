const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, str] = data;
  const len = +N;
  const result = new Array(len);

  for (let i = 0; i < Math.floor(len) / 2; i++) {
    const r = len - i - 1;

    if (str[i] == "?" && str[r] == "?") {
      result[i] = "a";
      result[r] = "a";
    } else {
      const t = str[i] != "?" ? str[i] : str[r];
      result[i] = t;
      result[r] = t;
    }
  }

  console.log(result.join(""));
}

solution(input);
