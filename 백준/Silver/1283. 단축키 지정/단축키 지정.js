const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  const dic = {};

  const result = data.map((el) => act(el, dic));
  console.log(result.join("\n"));
}

function act(str, dic) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i - 1] === " ") {
      const verify_s = verify(arr, arr[i], dic, i);
      if (verify_s) return verify_s;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      const verify_s = verify(arr, arr[i], dic, i);
      if (verify_s) return verify_s;
    }
  }

  return str;
}

function verify(arr, s, dic, idx) {
  const lower_s = s.toLowerCase();
  if (!dic[lower_s]) {
    dic[lower_s] = true;
    const _s = s;
    arr[idx] = `[${_s}]`;
    return arr.join("");
  }
  return false;
}

solution(input);
