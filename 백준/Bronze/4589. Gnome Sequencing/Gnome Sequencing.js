const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const cases = data.map((el) => el.split(" ").map(Number));

  const result = cases.map((arr) => {
    const max = Math.max(...arr),
      min = Math.min(...arr);

    if (arr.indexOf(max) === 1 || arr.indexOf(min) === 1) return "Unordered";
    else return "Ordered";
  });

  console.log("Gnomes:");
  console.log(result.join("\n"));
}

solution(input);
