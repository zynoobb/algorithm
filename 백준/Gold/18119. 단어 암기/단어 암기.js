const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, _] = data.shift().split(" ").map(Number);

  const alpTable = {};
  for (let i = 0; i < 26; i++) {
    alpTable[String.fromCharCode(97 + i)] = i;
  }

  const binaries = data.slice(0, n).map((el) => transToBinary(el, alpTable));
  let memories = makingMemories();
  const queries = data.slice(n);
  const result = [];

  queries.forEach((el) => {
    const [order, alp] = el.split(" ");
    memories =
      order === "1"
        ? memories & ~(1 << alpTable[alp])
        : memories | (1 << alpTable[alp]);

    let temp = 0;
    binaries.forEach((str) => (temp += compareWords(memories, str)));
    result.push(temp);
  });

  console.log(result.join("\n"));
}

function transToBinary(str, alpTable) {
  let binary = 0;
  for (let i = 0; i < str.length; i++) {
    binary |= 1 << alpTable[str[i]];
  }
  return binary;
}

function makingMemories() {
  let memories = 0;
  for (let i = 0; i < 26; i++) {
    memories |= 1 << i;
  }
  return memories;
}

function compareWords(memories, compare) {
  return (memories & compare) === compare ? 1 : 0;
}

solution(input);
