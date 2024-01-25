const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();

  const testCase = [];

  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) testCase.push(data.slice(i + 1, +data[i] + i + 1));
  }

  result = [];
  testCase.forEach((el) => (result = [...result, ...act(el)]));
  console.log(result.join("\n"));
}

function act(arr) {
  const community = arr.map((el) => el.split(" "));
  const names = community.flat();
  const nameTable = {},
    countTable = {},
    roots = {};

  const storage = [];

  let idx = 1;
  names.forEach((el) => {
    if (!nameTable[el]) {
      nameTable[el] = idx;
      roots[idx] = idx;
      countTable[idx] = 1;
      idx++;
    }
  });

  function find(node) {
    if (roots[node] !== node) roots[node] = find(roots[node]);
    return roots[node];
  }

  function union(a, b) {
    const x = find(a),
      y = find(b);

    const low = y > x ? x : y,
      high = x > y ? x : y;

    if (low !== high) {
      roots[high] = low;
      countTable[low] += countTable[high];
    }
    storage.push(countTable[low]);
  }

  community.forEach(([a, b]) => {
    union(nameTable[a], nameTable[b]);
  });

  return storage;
}

solution(input);
