const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const act = data.map((el) => el.split(" ").filter((x) => x)).flat();
  const obj = {};
  const idx = ["Re", "Pt", "Cc", "Ea", "Tb", "Cm", "Ex"];

  let sum = 0;
  idx.forEach((el) => (obj[el] = 0));
  act.forEach((el) => {
    sum++;
    if (idx.indexOf(el) !== -1) obj[el] += 1;
  });

  const result = [];
  idx.forEach((el) => {
    const n = (obj[el] / sum).toFixed(2);
    result.push(`${el} ${obj[el]} ${n}`);
  });
  result.push(`Total ${sum} 1.00`);

  console.log(result.join("\n"));
}

solution(input);
