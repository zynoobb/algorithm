const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[_, __, B], ...matrix] = data.map((el) => el.split(" ").map(Number));

  const arr = matrix.flat();

  function act(x) {
    let cnt = 0;
    let b = B;
    for (let i = 0; i < arr.length; i++) {
      const t = x - arr[i];
      if (t >= 0) {
        cnt += t;
        b -= t;
      } else {
        cnt -= 2 * t;
        b -= t;
      }
    }

    return 0 > b ? Infinity : cnt;
  }

  const storage = Array.from({ length: 257 }, () => 0);

  for (let i = 0; i <= 256; i++) {
    const time = act(i);
    storage[i] = time;
  }

  const min = Math.min(...storage);
  const result = storage.lastIndexOf(min);
  console.log(min, result);
}

solution(input);
