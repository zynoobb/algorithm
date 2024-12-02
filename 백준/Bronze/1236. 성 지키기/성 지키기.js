const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, m] = data.shift().split(" ").map(Number);

  const matrix = data.map((el) => el.split(""));
  let result = 0;

  const verifyX = (i) => {
    return matrix[i].filter((e) => e === "X").length > 0;
  };

  const verifyY = (j) => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] === "X") cnt++;
    }
    return !!cnt;
  };

  const repeatFunc = (x) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const callbackFun = x
          ? !verifyX(i) && !verifyY(j)
          : !verifyX(i) || !verifyY(j);

        if (callbackFun) {
          result++;
          matrix[i][j] = "X";
        }
      }
    }
  };

  repeatFunc(true);
  repeatFunc(false);

  console.log(result);
}

solution(input);
