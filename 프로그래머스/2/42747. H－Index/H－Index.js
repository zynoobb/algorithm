function solution(citations) {
  const sorted = citations.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > result) result = i + 1;
    else break;
  }

  return result;
}