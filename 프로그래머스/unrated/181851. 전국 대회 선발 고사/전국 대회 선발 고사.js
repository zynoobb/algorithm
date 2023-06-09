function solution(rank, attendance) {
    let sorted = rank.map((el,idx)=> [el, idx])
      .filter((el,idx)=> attendance[idx] === true)
      .sort((a,b)=> a[0] - b[0])
  
    return sorted[0][1] * 10000 + sorted[1][1] * 100 + sorted[2][1]
}