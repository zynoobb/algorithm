const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], ...arr] = data.map((el) => el.split(" ").map(Number));

  const lamps = Array.from({ length: m + 1 }, () => 0);
  const connections = Array.from({ length: m }, () => []);

  arr.forEach((x, i) => {
    x.shift();
    connections[i + 1] = x;
    x.forEach((y) => lamps[y]++);
  });

  for (let i = 1; i <= n; i++) {
    const temp = [...lamps];

    for (let lamp of connections[i]) {
      temp[lamp]--;
    }

    if (temp.slice(1).every((el) => el > 0)) {
      console.log(1);
      return;
    }
  }

  console.log(0);
}

solution(input);
