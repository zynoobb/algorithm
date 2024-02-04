function solution(enroll, referral, seller, amount) {
  const namesTable = {};
  const N = enroll.length + 1;
  enroll.forEach((el, idx) => (namesTable[el] = idx + 1));

  const roots = {};
  for (let i = 0; i < N; i++) {
    roots[i] = i;
  }

  referral.forEach((el, idx) => {
    el === "-" ? (roots[idx + 1] = 0) : (roots[idx + 1] = namesTable[el]);
  });

  const total = Array.from({ length: N }, () => 0);
  function DFS(node, money) {
    const nextMoney = parseInt(money * 0.1);
    total[node] += parseInt(money - nextMoney);

    if (!node || !nextMoney) return;

    const nextNode = roots[node];
    DFS(nextNode, parseInt(nextMoney));
  }

  seller.forEach((node, idx) => {
    const money = amount[idx];
    DFS(namesTable[node], money * 100);
  });

  return total.slice(1);
}