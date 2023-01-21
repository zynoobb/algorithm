function solution(numbers) {
let arr = [Math.max(...numbers)]
  numbers.splice(numbers.indexOf(Math.max(...numbers)),1)
  arr.push(Math.max(...numbers))
  
  return arr[0]*arr[1]
}