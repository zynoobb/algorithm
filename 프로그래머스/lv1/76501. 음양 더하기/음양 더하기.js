function solution(absolutes, signs) {
    let result = 0 
    for(let i = 0 ; i < signs.length ; i ++ ){
      if(!signs[i]){
        result -= absolutes[i]
      } else {
        result += absolutes[i]
      }
    }
    return result
}