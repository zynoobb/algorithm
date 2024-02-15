const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const result = data.map((el) => {
    return el + " = " + act(el);
  });

  console.log(result.join("\n"));
}

function act(x) {
  const [str, n] = x.split(" ");
  const arr = str.split("");

  const visited = Array.from({ length: arr.length }, () => false);
  const storage = [];
  let cnt = 0;
  let answer = null;

  function backTracking() {
    if (answer) return;

    if (storage.length === arr.length) {
      cnt++;
      if (cnt == n) {
        answer = storage.join("");
        return;
      }
    }

    for (let i = 0; i < str.length; i++) {
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

  return answer ? answer : "No permutation";
}

solution(input);
