function solution(land) {
  for(let i = 1 ; i < land.length ; i++) {
    const [q,w,e,r] = land[i-1]
    land[i][0] = land[i][0] + Math.max(w,e,r)
    land[i][1] = land[i][1] + Math.max(q,e,r)
    land[i][2] = land[i][2] + Math.max(q,w,r)
    land[i][3] = land[i][3] + Math.max(q,w,e)
  }
  return Math.max(...land.at(-1))
}