function solution(my_string, num1, num2) {
  let arr = [...my_string]
  arr[num2] = my_string[num1]
  arr[num1] = my_string[num2]
  return arr.join("")
}