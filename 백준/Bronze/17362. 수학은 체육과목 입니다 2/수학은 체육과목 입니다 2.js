const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data[0];
  const cut = n % 8;
  let result = 0;
  if (5 >= cut && cut >= 1) {
    result = cut;
  } else if (cut === 6) result = 4;
  else if (cut === 7) result = 3;
  else result = 2;

  console.log(result);
}

solution(input);
