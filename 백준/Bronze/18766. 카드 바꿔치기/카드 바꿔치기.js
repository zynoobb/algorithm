const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const tc = [];
  for (let i = 0; i < data.length; i += 3) {
    tc.push([data[i], data[i + 1].split(" "), data[i + 2].split(" ")]);
  }

  const func = ([a, b, c]) => {
    const bObj = {};
    const cObj = {};
    b.forEach((el) => (bObj[el] = (bObj[el] || 0) + 1));
    c.forEach((el) => (cObj[el] = (cObj[el] || 0) + 1));

    for (let i = 0; i < a; i++) {
      if (bObj[b[i]] !== cObj[b[i]]) return false;
    }

    return true;
  };

  const result = tc.map((el) => {
    return func(el) ? "NOT CHEATER" : "CHEATER";
  });

  console.log(result.join("\n"));
}

solution(input);
