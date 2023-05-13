function solution(arr, idx) {
  arr = arr.slice(idx)
  return arr.indexOf(1) !== -1 ? arr.indexOf(1) + idx : -1
}