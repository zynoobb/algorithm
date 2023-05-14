function solution(date1, date2) {
    const transStr = (x) => {
      return x.reduce((acc,cur)=> {
        return acc = acc + String(cur).padStart(2,"0")
      },"")   
    }
    date1 = transStr(date1)
    date2 = transStr(date2)
    
    return date1 < date2 ? 1 : 0
}