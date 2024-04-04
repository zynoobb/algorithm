const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const testCase = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "0") break;
    if (!isNaN(data[i])) {
      testCase.push(data.slice(i + 1, i + +data[i] + 1));
    }
  }

  const result = testCase.map((el) => act(el));

  console.log(result.map((el) => el.join(" ")).join("\n"));
}

function act(arr) {
  let storage = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    const [name, height] = arr[i]
      .split(" ")
      .map((el) => (!isNaN(el) ? +el : el));

    if (height > max) {
      storage = [name];
      max = height;
    } else if (height === max) {
      storage.push(name);
    }
  }

  return storage;
}

solution(input);
