function solution(n, costs) {
  const roots = {};
  for (let i = 0; i < n; i++) roots[i] = i;

  const sorted = costs.sort((a, b) => a[2] - b[2]);

  let result = 0;
  sorted.forEach(([s, e, w]) => {
    if (find(roots, s) !== find(roots, e)) {
      result += w;
      union(roots, s, e);
    }
  });

  return result;
}

function find(roots, node) {
  if (roots[node] !== node) {
    roots[node] = find(roots, roots[node]);
  }
  return roots[node];
}

function union(roots, node1, node2) {
  const [root1, root2] = [find(roots, node1), find(roots, node2)];
  roots[root2] = root1;
}
