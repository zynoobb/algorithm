function solution(n) {
  const rows = Array.from({ length: n }, () => 0);
  let result = 0;

  function verify(cnt) {
    for (let i = 0; i < cnt; i++) {
      if (rows[cnt] == rows[i] || Math.abs(rows[cnt] - rows[i]) == cnt - i) {
        return false;
      }
    }
    return true;
  }

  function DFS(cnt) {
    if (n === cnt) {
      result++;
      return;
    }

    for (let i = 0; i < n; i++) {
      rows[cnt] = i;
      if (verify(cnt)) {
        DFS(cnt + 1);
      }
    }
  }

  DFS(0);

  return result;
}
