const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const testCases = [];

  let temp = [];
  data.forEach((el) => {
    if (el !== "#") temp.push(el);
    else {
      testCases.push(temp);
      temp = [];
    }
  });

  testCases.pop();

  const fun = (arr) => {
    let word = arr[0];

    let cnt = 0;
    for (let i = 1; i < arr.length; i++) {
      if (word.length !== arr[i].length) return "Incorrect";
      for (let j = 0; j < word.length; j++) {
        if (word[j] !== arr[i][j]) cnt++;
      }

      if (cnt !== 1) return "Incorrect";
      else {
        cnt = 0;
        word = arr[i];
      }
    }

    return "Correct";
  };

  const result = testCases.map((el) => fun(el));

  console.log(result.join("\n"));
}

solution(input);
