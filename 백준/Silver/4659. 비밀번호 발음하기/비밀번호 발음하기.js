const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.pop();

  const result = data.map((el) =>
    act(el) ? `<${el}> is acceptable.` : `<${el}> is not acceptable.`
  );
  console.log(result.join("\n"));
}

function act(str) {
  const vowels = "aeiou";
  let vowelsCnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelsCnt++;
    if (str[i] == str[i + 1]) {
      if (str[i] == "e" || str[i] == "o") continue;
      else return false;
    }
    if (i < str.length - 2) {
      if (
        vowels.includes(str[i]) == vowels.includes(str[i + 1]) &&
        vowels.includes(str[i]) == vowels.includes(str[i + 2])
      )
        return false;
    }
  }
  return !!vowelsCnt;
}

solution(input);
