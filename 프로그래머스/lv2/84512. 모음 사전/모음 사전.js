function solution(word) {
  const vowels = ['A','E','I','O','U']
  let compare = ''
  let result = 0
  let toggle = false
  const dfs = () => {
    if(compare.length === 5) return
    else {
      for(let i = 0 ; i < 5 ; i ++) {
        if(toggle) return
        compare += vowels[i]
        result ++
        if(compare === word) toggle = true
        dfs(i)
        compare = compare.slice(0, compare.length - 1)
      }
    }
  }

  dfs()
  return result
}