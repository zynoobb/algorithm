const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], arr, ...queries] = data.map((el) => el.split(" ").map(Number));

  arr.sort((a, b) => a - b);

  function binarySearch(x, order) {
    let left = 0,
      right = n - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (order) {
        if (arr[mid] >= x) right = mid - 1;
        else left = mid + 1;
      } else {
        if (x >= arr[mid]) left = mid + 1;
        else right = mid - 1;
      }
    }

    return left;
  }

  const router = {
    1: (x) => n - binarySearch(x, true),
    2: (x) => n - binarySearch(x, false),
    3: (x, y) => binarySearch(y, false) - binarySearch(x, true),
  };

  const result = queries.map((el) => {
    if (el[0] !== 3) {
      const [a, b] = el;
      return router[a](b);
    } else {
      const [a, b, c] = el;
      return router[a](b, c);
    }
  });

  console.log(result.join("\n"));
}

solution(input);
