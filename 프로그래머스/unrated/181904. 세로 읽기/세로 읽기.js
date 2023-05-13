function solution(my_string, m, c) {
  let arr = [...my_string]
  return arr.filter((el,idx)=> {
      if(idx%m === c-1) return el
  }).join("")
}