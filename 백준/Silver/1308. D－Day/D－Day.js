const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[sy, sm, sd], [ey, em, ed]] = data.map((el) =>
    el.split(" ").map(Number)
  );

  if (sy + 1000 < ey || (sy + 1000 == ey && sm <= em && sd <= ed)) {
    console.log("gg");
    return;
  }

  const start = getDays(sy, sm, sd),
    end = getDays(ey, em, ed);

  console.log(`D-${end - start}`);
}

function verifyYear(y) {
  if (y % 4 === 0) {
    if (y % 100 === 0 && y % 400 !== 0) return false;
    else return true;
  }
  return false;
}

function getDays(y, m, d) {
  let cnt = d;
  const monthDays = [
    31,
    verifyYear(y) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  for (let i = 0; i < y; i++) cnt += 365 + verifyYear(i);
  for (let i = 0; i < m - 1; i++) cnt += monthDays[i];

  return cnt;
}

solution(input);
