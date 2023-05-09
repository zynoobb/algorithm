function solution(num_list) {
  let multi = num_list.reduce((acc,cur)=> acc*cur,1)
  let pow = Math.pow(num_list.reduce((acc,cur)=> acc+cur),2)
  return multi > pow ? 0 : 1
}