function solution(myString) {
    let iCharCode = "l".charCodeAt()
    
    let result = [...myString].map((el)=> {
      if(el.charCodeAt() < iCharCode) {
        return el = "l"
      } else return el = el
    })
    
    return result.join("")
}