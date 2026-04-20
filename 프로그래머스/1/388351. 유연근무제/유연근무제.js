function solution(schedules, timelogs, startday) {
 const transTime = (t) => {
    return +String(t).slice(0, -2) * 60 + +String(t).slice(-2);
  };

  const tranSche = schedules.map((el) => transTime(el));
  const transLogs = timelogs.map((arr) => arr.map((el) => transTime(el)));

  let result = 0;
  for (let i = 0; i < tranSche.length; i++) {
    const t = tranSche[i];
    let dayIdx = startday;
    let cnt = 0;
    for (let j = 0; j < 7; j++) {
      log = transLogs[i][j];
      if (t + 10 >= log && dayIdx % 7 !== 6 && dayIdx % 7 !== 0) cnt++;
      dayIdx++;
    }
    if (cnt === 5) result++;
  }

  return result;
}