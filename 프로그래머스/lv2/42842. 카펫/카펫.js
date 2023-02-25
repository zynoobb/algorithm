function solution(brown, yellow) {
  let sum = brown + yellow;
  let result = [];

  for (let i = 3; i < Math.floor(sum / 2); i++) {
    if (sum % i === 0 && (sum / i - 2) * (i - 2) === yellow) {
      return [sum / i, i];
    }
  }
}