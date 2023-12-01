const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n], arr] = data.map((el) => el.split(" ").map(Number));
  const trees = Array.from({ length: n }, () => []);

  makingTree(arr, trees, 0);
  console.log(trees.map((el) => el.join(" ")).join("\n"));
}

function makingTree(list, trees, dep) {
  const mid = Math.floor(list.length / 2);
  trees[dep].push(list[mid]);

  if (list.length === 1) return;
  else {
    makingTree(list.slice(0, mid), trees, dep + 1);
    makingTree(list.slice(mid + 1), trees, dep + 1);
  }
}

solution(input);
