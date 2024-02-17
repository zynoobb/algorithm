const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, k], ...ices] = data.map((el) => el.split(" ").map(Number));

  const table = {};
  let endPoint = 0;
  ices.forEach(([ice, location]) => {
    table[location] = ice;
    endPoint = Math.max(endPoint, location);
  });

  let left = 0,
    right = k * 2 + 1,
    cnt = 0;

  for (let i = left; i < right; i++) {
    if (table[i]) cnt += table[i];
  }

  let max = cnt;

  while (right <= endPoint) {
    if (table[left]) cnt -= table[left];
    if (table[right]) cnt += table[right];

    left++, right++;
    max = Math.max(cnt, max);
  }
  console.log(max);
}

solution(input);
