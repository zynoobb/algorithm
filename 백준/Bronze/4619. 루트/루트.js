const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();
  const tc = data.map((el) => el.split(" ").map(Number));

  const func = (e) => {
    const [b, n] = e;
    let dif = Infinity,
      a = 1;

    while (true) {
      const newDif = Math.abs(Math.pow(a, n) - b);
      if (dif > newDif) {
        dif = newDif;
        a++;
      } else {
        return a - 1;
      }
    }
  };

  const result = tc.map((el) => func(el));
  console.log(result.join("\n"));
}

solution(input);
