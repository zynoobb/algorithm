const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const func = ([a, b]) => {
    if (a.length !== b.length) return false;

    const [aSort, bSort] = [a, b].map((el) => {
      return el
        .split("")
        .sort((x, y) => x.localeCompare(y))
        .join("");
    });
    return aSort === bSort;
  };

  const result = data.map((el) => {
    const [a, b] = el.split(" ");
    return `${a} & ${b} are${func([a, b]) ? "" : " NOT"} anagrams.`;
  });

  console.log(result.join("\n"));
}

solution(input);
