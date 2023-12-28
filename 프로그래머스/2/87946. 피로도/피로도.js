function solution(k, dungeons) {
  const N = dungeons.length;
  const visited = Array.from({ length: N }, () => false);
  let result = 0;

  function DFS(tired, cntTimes) {
    if (cntTimes > result) result = cntTimes;
    for (let i = 0; i < N; i++) {
      if (tired >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        DFS(tired - dungeons[i][1], cntTimes + 1);
        visited[i] = false;
      }
    }
  }

  DFS(k, 0);

  return result;
}