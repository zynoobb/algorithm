function solution(board, moves) {
let input = []
    let result = 0
    
      for(let i = 0 ; i < moves.length ; i++){
        for(let j = 0 ; j < board.length ; j++){
          let target = board[j][moves[i]-1]
          if(target !== 0){
            input.push(target)
            board[j][moves[i]-1] = 0
            if(input[input.length-2] === input[input.length-1]){
              input.pop()
              input.pop()
              result += 2
            }
            break
          }
        }
      }
  return result
}