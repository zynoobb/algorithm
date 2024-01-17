function solution(topping) {
  const aTable = {},
    bTable = {};

  topping.forEach((el) => (aTable[el] = (aTable[el] || 0) + 1));
  let aLen = Object.keys(aTable).length,
    bLen = 0,
    result = 0;

  topping.reverse().forEach((el) => {
    if (!bTable[el]) {
      bTable[el] = 1;
      bLen++;
    } else bTable[el]++;
    aTable[el]--;

    if (!aTable[el]) aLen--;

    if (aLen == bLen) result++;
  });

  return result;
}

