function solution(ingredient) {
  let result = 0
  const stack = []
  const target = '1231'

  ingredient.forEach(el => {
    stack.push(el)
    if(stack.slice(-4).join('') === target) {
      stack.splice(-4)
      result ++
    }
  })

  return result
}
