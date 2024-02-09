const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data[0].split(" ").map(Number);
  const arr = data[1].split("");

  const visited = Array.from({ length: N }, () => false);

  for (let i = 0; i < N; i++) {
    if (arr[i] === "P") {
      for (let j = i - M; j <= i + M; j++) {
        if (arr[j] === "H" && !visited[j]) {
          visited[j] = true;
          break;
        }
      }
    }
  }

  console.log(visited.filter((el) => el).length);
}

solution(input);
