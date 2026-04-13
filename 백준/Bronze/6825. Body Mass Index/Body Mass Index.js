const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [w, h] = data.map(Number);
  const bmi = w / (h * h);

  console.log(
    bmi > 25 ? "Overweight" : bmi >= 18.5 ? "Normal weight" : "Underweight"
  );
}

solution(input);
