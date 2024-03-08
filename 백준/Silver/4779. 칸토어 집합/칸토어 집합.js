const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map(Number);

  const result = arr.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(n) {
  const group = Array.from({ length: 3 ** n }, () => 1);

  function recursive(idx, t) {
    if (t === 1) return;
    const div = Math.floor(t / 3);
    for (let i = idx + div; i < idx + div * 2; i++) group[i] = 0;

    recursive(idx, div);
    recursive(idx + div * 2, div);
  }

  recursive(0, 3 ** n);

  return group.map((el) => (el ? "-" : " ")).join("");
}

solution(input);
