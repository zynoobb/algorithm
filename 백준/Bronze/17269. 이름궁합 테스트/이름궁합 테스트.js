const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const table = {
    A: 3,
    B: 2,
    C: 1,
    D: 2,
    E: 4,
    F: 3,
    G: 1,
    H: 3,
    I: 1,
    J: 1,
    K: 3,
    L: 1,
    M: 3,
    N: 2,
    O: 1,
    P: 2,
    Q: 2,
    R: 2,
    S: 1,
    T: 2,
    U: 1,
    V: 1,
    W: 1,
    X: 2,
    Y: 2,
    Z: 1,
  };

  const [[n, m], [a, b]] = data.map((el) =>
    el.split(" ").map((k) =>
      isNaN(k)
        ? k
            .split("")
            .map((u) => table[u])
            .join("")
        : Number(k)
    )
  );

  const s = n > m ? m : n;
  let str = "";
  for (let i = 0; i < s; i++) {
    const [as, bs] = [a[i], b[i]];
    str += String(as) + String(bs);
  }

  str += s === n ? b.slice(s, m) : a.slice(s, n);

  const recursive = (str) => {
    if (str.length === 2) return str;
    else {
      let newStr = "";
      for (let i = 0; i < str.length - 1; i++) {
        const t = String(+str[i] + +str[i + 1]);
        newStr += t.length >= 2 ? t.slice(-1) : t;
      }

      return recursive(newStr);
    }
  };

  const result = +recursive(str) + "%";

  console.log(result);
}

solution(input);
