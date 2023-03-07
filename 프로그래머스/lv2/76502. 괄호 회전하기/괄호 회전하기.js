
const numbering = {
  "[": 0,
  "]": 1,
  "{": 2,
  "}": 3,
  "(": 4,
  ")": 5,
}

function solution(s) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    s = s.slice(1) + s[0]
    const stack = []
    for (let j = 0; j < s.length; j++) {
      if (numbering[s[j]] % 2 === 0) {
        stack.push(numbering[s[j]])
      } else if (stack[stack.length - 1] === numbering[s[j]] - 1) {
        stack.splice(stack.length - 1, 1)
      } else break

      if (j === s.length - 1 && stack.length == 0) result++
    }
  }
  return result
}
