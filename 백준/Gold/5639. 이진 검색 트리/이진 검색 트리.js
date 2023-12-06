const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map(Number);
  const result = [];

  const postOrder = (start, end) => {
    if (start > end) return;

    let mid = end + 1;
    for (let i = start; i <= end; i++) {
      if (arr[i] > arr[start]) {
        mid = i;
        break;
      }
    }

    postOrder(start + 1, mid - 1); // 왼쪽 트리
    postOrder(mid, end); // 오른쪽 트리
    result.push(arr[start]);
  };
  postOrder(0, arr.length - 1);

  console.log(result.join("\n"));
}

solution(input);
