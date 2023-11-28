function solution(order, course) {
  const tables = Array.from(
    { length: Math.max(...course) + 1 },
    (el) => (el = {})
  );

  order.forEach((el) => {
    course.forEach((leng) => {
      const combinations = getCombination(el, leng);
      combinations.forEach((com) => {
        tables[leng][com] = (tables[leng][com] || 0) + 1;
      });
    });
  });

  const result = [];
  tables.forEach((table) => {
    if (Object.values(table).length) result.push(getMenu(table));
  });

  return result.flat().sort();
}

function getCombination(str, leng) {
  const arr = str.split("").sort();

  const combination = [];
  function combine(cur, start) {
    if (cur.length === leng) {
      combination.push(cur.join(""));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      cur.push(arr[i]);
      combine(cur, i + 1);
      cur.pop();
    }
  }
  combine([], 0);
  return combination;
}

function getMenu(obj) {
  const entries = Object.entries(obj)
    .filter((el) => el[1] !== 1)
    .sort((a, b) => b[1] - a[1]);

  if (entries.length == 0) return [];

  const menus = [];
  const max = entries[0][1];
  for (let i = 0; i < entries.length; i++) {
    if (max == entries[i][1]) {
      menus.push(entries[i][0]);
    } else break;
  }
  return menus;
}