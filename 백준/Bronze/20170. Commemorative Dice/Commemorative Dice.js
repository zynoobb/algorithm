const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data.map((el) => el.split(" ").map(Number));

  let cnt = 0;
  a.forEach((x) =>
    b.forEach((y) => {
      if (x > y) cnt++;
    })
  );

  const gcd = (x, y) => {
    return y ? gcd(y, x % y) : x;
  };

  const div = gcd(36, cnt);
  console.log(`${cnt / div}/${36 / div}`);
}

solution(input);
