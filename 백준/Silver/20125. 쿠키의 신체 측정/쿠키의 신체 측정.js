const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();
  const totals = data.filter((x) => x.includes("*"));
  let headY;
  for (let i = 0; i < N; i++) {
    if (data[i].includes("*")) {
      headY = i + 2;
      break;
    }
  }

  const headX = totals[0].indexOf("*");
  const leftArm = headX - totals[1].indexOf("*"),
    rightArm = totals[1].lastIndexOf("*") - headX;

  let body = 0,
    leftFoot = 0,
    rightFoot = 0,
    idx = 2;

  while (idx < totals.length) {
    const left = totals[idx].indexOf("*"),
      right = totals[idx].lastIndexOf("*");

    if (left === right && left === headX) body++;
    if (headX > left) leftFoot++;
    if (right > headX) rightFoot++;

    idx++;
  }

  console.log(headY, headX + 1);
  console.log(leftArm, rightArm, body, leftFoot, rightFoot);
}

solution(input);
