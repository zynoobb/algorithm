const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);
  const [J, ...apples] = data.map(Number);

  let cnt = 1,
    result = 0;

  for (let apple of apples) {
    if (apple >= cnt && cnt + (M - 1) >= apple) continue;
    else if (cnt > apple) {
      result += Math.abs(apple - cnt);
      cnt = apple;
    } else {
      result += apple - (M - 1) - cnt;
      cnt = apple - (M - 1);
    }
  }

  console.log(result);
}

solution(input);
