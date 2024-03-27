const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const result = data.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(str) {
  let cnt = 0;

  while (str !== "6174") {
    const arr = str.split("").map(Number);
    const [max, min] = [
      sortArrayToOrder(arr, false),
      sortArrayToOrder(arr, true),
    ];

    const temp = String(max - min).padStart(4, "0");
    str = temp;
    cnt++;
    if (str === "6174") break;
  }

  return cnt;
}

function sortArrayToOrder(arr, order) {
  const temp = order ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
  return temp.map(String).join("");
}

solution(input);
