const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  let hp = +data.pop();
  const arr = data.map((el) => el.split(" ").map(Number));
  const start = arr.map((el) => el[1]).reduce((acc, cur) => acc + cur);

  let cnt = 0;
  while (hp > 0) {
    arr.forEach(([t, d]) => {
      if (cnt % t === 0) hp -= d;
    });
    cnt++;
  }

  console.log(cnt - 1);
}

solution(input);
