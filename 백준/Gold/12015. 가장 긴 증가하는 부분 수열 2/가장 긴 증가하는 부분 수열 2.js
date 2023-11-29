const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_], arr] = data.map((el) => el.split(" ").map(Number));

  const storage = [arr[0]];

  function binarySearch(item) {
    let [start, end] = [0, storage.length - 1];

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (storage[mid] === item) return mid;
      else if (storage[mid] < item) start = mid + 1;
      else end = mid - 1;
    }
    return start;
  }

  arr.forEach((el) => {
    if (el > storage.at(-1)) storage.push(el);
    else {
      idx = binarySearch(el);
      storage[idx] = el;
    }
  });

  console.log(storage.length);
}

solution(input);
