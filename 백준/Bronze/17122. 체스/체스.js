const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const testCase = data.map((el) => el.split(" "));

  function alpCheck(str) {
    const [a, b] = str.split("");
    const charCode = a.charCodeAt();

    return (charCode + +b) % 2 === 0;
  }

  function numberCheck(str) {
    const t = +str - 1;
    const [share, remain] = [Math.floor(t / 8), t % 8];
    return (share + remain) % 2 === 0;
  }

  const result = testCase.map((el) => {
    const [x, y] = [alpCheck(el[0]), numberCheck(el[1])];
    return x === y ? "YES" : "NO";
  });

  console.log(result.join("\n"));
}

solution(input);
