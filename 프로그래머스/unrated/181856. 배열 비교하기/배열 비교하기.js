function solution(arr1, arr2) {
  if(arr1.length > arr2.length) return 1
  if(arr1.length < arr2.length) return -1
  
  let sum1 = arr1.reduce((acc,cur)=> acc+cur)
  let sum2 = arr2.reduce((acc,cur)=> acc+cur)
  
  return sum1 > sum2
    ? 1
    : sum1 < sum2
    ? -1
    : 0
}