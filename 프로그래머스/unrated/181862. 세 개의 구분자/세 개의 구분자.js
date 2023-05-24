function solution(myStr) {
    let result = []
    
    let temp = ""
    for(let i = 0 ; i < myStr.length ; i ++) {
        if(myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
            result.push(temp)
            temp = ""
        } else temp += myStr[i]
      
      if(i === myStr.length - 1) result.push(temp)
    }
    
    return result.filter(el => el !== "").length !== 0
      ? result.filter(el => el !== "")
      : ["EMPTY"]
}