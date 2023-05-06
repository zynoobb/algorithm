function solution(number) {
  let arr = [...number]
  let sum = arr.reduce((a,c)=> a+Number(c),0)
  return sum%9
}