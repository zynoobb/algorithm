const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], arr] = data.map((el) => el.split(" ").map(Number));

  const storage = [];
  const visited = Array.from({ length: N }, () => false);
  let result = 0;

  function backTracking() {
    if (storage.length === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(storage[i] - storage[i + 1]);
      }
      result = Math.max(result, sum);
      return;
    }

    for (let i = 0; i < N; i++) {
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
  console.log(result);
}

solution(input);