function solution(n, k) {
    let str = n.toString(k).split("0").
    filter((a)=> a !== "1" && a !== "")
    
    let result = str.length

    for(let i = 0 ; i < str.length ; i++){
      for(let j = 2 ; j <= Math.sqrt(str[i]) ; j++){
        if(str[i]%j == 0) {
          result--
          break
        }
      }
    }
    return result
}