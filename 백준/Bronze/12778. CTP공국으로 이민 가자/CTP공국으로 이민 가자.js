const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = [];
  for (let i = 1; i < data.length; i += 2) {
    const [a, b] = [data[i].split(" ")[1], data[i + 1].split(" ")];

    const t = b
      .map((el) =>
        a === "N" ? String.fromCharCode(+el + 64) : el.charCodeAt() - 64
      )
      .join(" ");

    result.push(t);
  }

  console.log(result.join("\n"));
}

solution(input);
