function solution(food) {
  let front = []
  
  for(let i = 0 ; i < food.length ; i++){
    for(let j = 0 ; j < Math.floor(food[i]/2); j++){
      front.push(i)
    }
  }
  
  let reversed = [...front].reverse()
  front.push(0)
  
  return front.concat(reversed).join("")
}