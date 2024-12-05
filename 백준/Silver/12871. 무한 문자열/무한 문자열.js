const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [a, b] = data;

  const [aLen, bLen] = [a.length, b.length];

  //euclid
  let x = aLen >= bLen ? aLen : bLen,
    y = aLen < bLen ? aLen : bLen;

  while (y !== 0) {
    let t = x % y;
    x = y;
    y = t;
  }

  const lcm = (aLen * bLen) / x;

  const getWord = (word, len) => {
    const repeatCnt = lcm / len;
    return word.repeat(repeatCnt);
  };

  const [aWord, bWord] = [getWord(a, aLen), getWord(b, bLen)];

  console.log(aWord === bWord ? 1 : 0);
}

solution(input);
