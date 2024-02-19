const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [_, ...arr] = data.map(Number);

  const eureka = makingEureka();
  const table = {};

  for (let i = 0; i < eureka.length; i++) {
    for (let j = 0; j < eureka.length; j++) {
      for (let k = 0; k < eureka.length; k++) {
        const T = eureka[i] + eureka[j] + eureka[k];
        if (T > 1000) break;
        table[T] = true;
      }
    }
  }

  const result = arr.map((el) => {
    return table[el] ? 1 : 0;
  });

  console.log(result.join("\n"));
}

function makingEureka() {
  const arr = [];

  let i = 1;
  while (true) {
    const x = (i * (i + 1)) / 2;

    arr.push(x);
    if (i == 46) break;

    i++;
  }

  return arr;
}

solution(input);
