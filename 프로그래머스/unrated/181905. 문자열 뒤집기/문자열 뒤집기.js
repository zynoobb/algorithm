function solution(my_string, s, e) {
  const arr = my_string.split('')
  const reverse = my_string.slice(s,e+1).split('').reverse()

  for(let i = s ; i <= e ; i ++) {
    arr[i] = reverse[i-s]
  }
  return arr.join('')
}
