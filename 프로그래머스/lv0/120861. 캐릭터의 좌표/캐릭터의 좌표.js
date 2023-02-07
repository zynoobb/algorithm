function solution(keyinput, board) {
let [a,b] = board
  let x = 0 
  let y = 0
  let aa = Math.floor(a/2)
  let ab = Math.floor(b/2)
  
  for(let i = 0 ; i < keyinput.length ; i ++){
    if(keyinput[i] == "left" && x != -aa) x--
    if(keyinput[i] == "right" && x != aa) x++
    if(keyinput[i] == "up" && y != ab) y++
    if(keyinput[i] == "down" && y != -ab) y--
  }
  return [x,y]
}