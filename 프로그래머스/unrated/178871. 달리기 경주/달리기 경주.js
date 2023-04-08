function solution(players, callings) {
  let obj = new Map(players.map((el, idx) => [el, idx]));
  let arr = [...players];
  for (let i = 0; i < callings.length; i++) {
    const idx = obj.get(callings[i]) - 1;
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
    obj.set(arr[idx], idx);
    obj.set(arr[idx + 1], idx + 1);
  }
  return arr;
}
