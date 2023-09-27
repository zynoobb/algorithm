function solution(word) {
  const vowels = ['A','E','I','O','U']
  let compare = ''
  let result = 0
  let toggle = false
  const backTracking = () => {
    if(compare.length === 5) return
    else {
      for(let i = 0 ; i < 5 ; i ++) {
        if(toggle) return
        compare += vowels[i]
        result ++
        if(compare === word) toggle = true
       backTracking()
        compare = compare.slice(0, compare.length - 1)
      }
    }
  }

 backTracking()
  return result
}