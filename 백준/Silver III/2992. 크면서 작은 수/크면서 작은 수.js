const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data[0].split("");
  arr.sort((a, b) => a - b);

  const set = new Set();
  const storage = [];
  const visited = Array.from({ length: arr.length }, () => false);

  function backTracking() {
    if (arr.length === storage.length) {
      set.add(+storage.join(""));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        storage.push(arr[i]);
        backTracking();
        storage.pop();
        visited[i] = false;
      }
    }
  }
  backTracking();

  const filtered = [...set].sort((a, b) => a - b).filter((el) => el > +data[0]);
  console.log(filtered.length ? filtered[0] : 0);
}

solution(input);
