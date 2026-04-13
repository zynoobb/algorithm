const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data.map(Number);
  const dif = b - a;
  const cost = dif >= 31 ? 500 : dif >= 21 ? 270 : dif >= 1 ? 100 : 0;

  console.log(
    cost > 0
      ? `You are speeding and your fine is $${cost}.`
      : "Congratulations, you are within the speed limit!"
  );
}

solution(input);
