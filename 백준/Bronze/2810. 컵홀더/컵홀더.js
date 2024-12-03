const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, str] = data.map((el) => (!isNaN(el) ? +el : el));

  const arr = str.replace(/LL/g, "C").split("").join("*").split("");
  arr.unshift("*"), arr.push("*");

  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === "S") {
      if (arr[i - 1] === "*") {
        result++;
        arr[i - 1] = false;
      } else if (arr[i + 1] === "*") {
        result++;
        arr[i + 1] = false;
      }
    }

    if (arr[i] === "C") {
      if (arr[i - 1] === "*") {
        result++;
        arr[i - 1] = false;
      }
      if (arr[i + 1] === "*") {
        result++;
        arr[i + 1] = false;
      }
    }
  }

  console.log(result);
}

solution(input);
