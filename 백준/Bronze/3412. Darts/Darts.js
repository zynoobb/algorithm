const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const testCase = [];

  let j = 1;
  for (let i = 0; i < data.length; i += j) {
    j = +data[i] + 1;
    testCase.push(data.slice(i + 1, i + +data[i] + 1));
  }

  const result = testCase.map((el) => act(el));
  console.log(result.join("\n"));
}

function act(arr) {
  const sqrt = (x, y) => Math.sqrt((+x) ** 2 + (+y) ** 2);

  const scores = arr.map((el) =>
    el.split(" ").map((x) => {
      return x.includes("-") ? +x.slice(1) : +x;
    })
  );

  const result = scores.reduce((acc, [x, y]) => {
    const t = sqrt(x, y);
    let score = 0;
    if (20 >= t) score = 10;
    else if (40 >= t) score = 9;
    else if (60 >= t) score = 8;
    else if (80 >= t) score = 7;
    else if (100 >= t) score = 6;
    else if (120 >= t) score = 5;
    else if (140 >= t) score = 4;
    else if (160 >= t) score = 3;
    else if (180 >= t) score = 2;
    else if (200 >= t) score = 1;
    return acc + score;
  }, 0);

  return result;
}

solution(input);
