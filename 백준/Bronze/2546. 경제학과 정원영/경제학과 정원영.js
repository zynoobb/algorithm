const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "") {
      const [_, c, e] = [data[i + 1], data[i + 2], data[i + 3]].map((el) =>
        el.split(" ").map(Number)
      );
      let cnt = 0;
      const [cAvg, eAvg] = [c, e].map((el) => {
        return el.reduce((acc, cur) => acc + cur) / el.length;
      });

      c.forEach((el) => {
        if (el < cAvg && el > eAvg) cnt++;
      });

      result.push(cnt);
    }
  }
  console.log(result.join("\n"));
}

solution(input);
