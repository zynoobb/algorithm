function solution(arr) {
  function callback(n, m) {
    let a = n;
    let b = m;

    while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
    }
    return (n * m) / a;
  }

  let result = arr.reduce((a, c) => {
    return callback(a, c);
  }, 1);

  return result;
}