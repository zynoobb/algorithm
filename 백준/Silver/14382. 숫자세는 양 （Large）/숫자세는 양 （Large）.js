const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, ...arr] = data.map(Number);

  const result = arr.map((el, idx) => {
    return `Case #${idx + 1}: ${act(el)}`;
  });

  console.log(result.join("\n"));
}

function act(x) {
  if (x === 0) return "INSOMNIA";

  const set = new Set();
  let i = 1;
  let last = 0;
  while (set.size !== 10) {
    const temp = x * i;
    const split = String(temp).split("");

    split.forEach((el) => set.add(el));

    last = temp;
    i++;
  }

  return last;
}

solution(input);