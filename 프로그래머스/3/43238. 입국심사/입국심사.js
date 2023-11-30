function solution(n, times) {
  let start = 1;
  let end = Math.max(...times) * n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const persons = times.reduce((ac, cur) => ac + Math.floor(mid / cur), 0);
    persons >= n ? (end = mid - 1) : (start = mid + 1);
  }

  return start;
}
