function solution(picture, k) {
  let result = []
  let temp = []
  for(let i = 0 ; i < picture.length ; i++) {
    let pieces = ""
    for(let j = 0 ; j < picture[i].length ; j++) {
      let piece = picture[i][j].repeat(k)
      pieces += piece
    }
    temp.push(pieces)
  }
  
  for(let i = 0 ; i < temp.length ; i ++) {
    for(let j = 0 ; j < k ; j ++) {
      result.push(temp[i])
    }
  }
  return result
}