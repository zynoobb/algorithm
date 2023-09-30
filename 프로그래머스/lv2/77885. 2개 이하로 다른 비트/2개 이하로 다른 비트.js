function solution(numbers) {
  const act = (n) => {
    if(n % 2 === 0) return n + 1
    else {
      const str = ('0' + n.toString(2)).split('')
      for(let i = str.length - 1 ; i >= 0 ; i --) {
        if(str[i] === '0') {
          [str[i+1], str[i]] = ['0', '1']
          break
        }
      }      
      return parseInt(str.join(''),2)
    }
  }

  return numbers.map(el => act(el))
}
