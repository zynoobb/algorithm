const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const str = data[0].split("");
  const table = {};
  str.forEach((el) => (table[el] = (table[el] || 0) + 1));

  const entries = Object.entries(table).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let oddCnt = 0;
  let mid = "";
  for (let i = 0; i < entries.length; i++) {
    const [s, n] = entries[i];
    if (n % 2 == 1) {
      oddCnt++;
      mid = s;

      if (oddCnt >= 2) {
        console.log("I'm Sorry Hansoo");
        return;
      }
    }
  }

  let front = "";
  entries.forEach(([s, n]) => {
    front += s.repeat(Math.floor(n / 2));
  });
  let back = front.split("").reverse().join("");
  console.log(front + mid + back);
}

solution(input);
