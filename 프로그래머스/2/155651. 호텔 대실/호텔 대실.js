function solution(book_time) {
  const arr = book_time
    .map((el) => el.map((x) => timeTransfer(x)))
    .sort((a, b) => a[0] - b[0]);

  const result = [];
  arr.forEach(([start, end]) => {
    const minTime = Math.min(...result);

    minTime + 10 > start
      ? result.push(end)
      : (result[result.indexOf(minTime)] = end);
  });
  return result.length;
}

function timeTransfer(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}