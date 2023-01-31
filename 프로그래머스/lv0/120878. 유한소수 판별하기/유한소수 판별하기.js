function solution(a, b) {
  let result = (a/b).toString().padEnd(18,"0")
  return result[15]==='0'&&result[16]==='0'&&result[17]==="0"?1:2
}