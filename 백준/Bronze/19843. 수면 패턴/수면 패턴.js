const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [T, _] = data.shift().split(" ").map(Number);

  const timesTransfer = (d, t) => {
    const idx = ["Mon", "Tue", "Wed", "Thu", "Fri"].indexOf(d);
    return 24 * idx + t;
  };

  let need = T;

  data.forEach((el) => {
    const [d1, t1, d2, t2] = el.split(" ").map((v) => (!isNaN(v) ? +v : v));
    need -= timesTransfer(d2, t2) - timesTransfer(d1, t1);
  });

  console.log(need > 48 ? -1 : need >= 0 ? need : 0);
}

solution(input);
