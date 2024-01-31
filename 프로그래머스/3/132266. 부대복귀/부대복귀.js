function solution(n, roads, sources, destination) {
  const distances = Array.from({ length: n + 1 }, () => -1);
  const edges = Array.from({ length: n + 1 }, () => []);

  roads.forEach(([from, to]) => {
    edges[from].push(to);
    edges[to].push(from);
  });

  distances[destination] = 0;
  const queue = [[0, destination]];
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [dist, cnt] = queue[queueIdx++];

    edges[cnt].forEach((next) => {
      if (distances[next] === -1) {
        queue.push([dist + 1, next]);
        distances[next] = dist + 1;
      }
    });
  }

  return sources.map((el) => distances[el]);
}