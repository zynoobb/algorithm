const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, p], ...arr] = data.map((el) => el.split(" ").map(Number));

  const stacks = {};
  let result = 0;

  arr.forEach(([l, f]) => {
    if (!stacks[l]) stacks[l] = [];

    while (stacks[l].length && stacks[l].at(-1) > f) {
      stacks[l].pop();
      result++;
    }

    if (stacks[l].at(-1) !== f) {
      stacks[l].push(f);
      result++;
    }
  });

  console.log(result);
}

solution(input);
