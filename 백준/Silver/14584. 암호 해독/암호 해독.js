const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [str, _, ...words] = data;

  for (let i = 0; i < 26; i++) {
    const transStr = str
      .split("")
      .map((el) => {
        const chr = el.charCodeAt() + i;
        const chrCode = chr > 122 ? chr - 26 : chr;
        return String.fromCharCode(chrCode);
      })
      .join("");

    if (verify(words, transStr)) {
      console.log(transStr);
      return;
    }
  }
}

function verify(words, tranStr) {
  for (const word of words) {
    if (tranStr.includes(word)) return true;
  }
  return false;
}

solution(input);
