const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b, c, d] = data.map((el) => el.split(" ").map(Number)).flat();

  function cal(q, w, e, r) {
    return q / e + w / r;
  }

  const arr = [
    cal(a, b, c, d),
    cal(c, a, d, b),
    cal(d, c, b, a),
    cal(b, d, a, c),
  ];

  const max = Math.max(...arr);

  console.log(arr.indexOf(max));
}

solution(input);

// a b c d
// c a d b
// d c b a
// b d a c
