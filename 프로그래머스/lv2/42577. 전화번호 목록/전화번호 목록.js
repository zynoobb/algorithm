function solution(phone_book) {
  const sorted = phone_book.sort((a,b)=> a.length - b.length)
  const table = {}
  
  for(let i = 0 ; i < sorted.length ; i ++) {
    const str = sorted[i]
    for(let j = 0 ; j < sorted[i].length ; j ++) {
      const piece = str.slice(0,j+1)
      if(table[piece]) return false
    }
    table[str] = true
  }
  return true
}
