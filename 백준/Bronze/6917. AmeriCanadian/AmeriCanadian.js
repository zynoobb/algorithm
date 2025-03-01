const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();

  const vowel = ["a", "e", "i", "o", "u", "y"];

  const result = data.map((el) => {
    if (el.length > 3 && el.slice(-2) === "or") {
      const isVowel = vowel.indexOf(el.slice(-3, -2));
      if (isVowel === -1) {
        return el.slice(0, -2) + "our";
      } else return el;
    }
    return el;
  });

  console.log(result.join("\n"));
}

solution(input);
