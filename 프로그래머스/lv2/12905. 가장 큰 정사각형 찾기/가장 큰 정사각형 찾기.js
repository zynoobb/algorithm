function solution(board) {
  if(board.length < 2 && board[0].length < 2) return 1
  let result = 0
  for(let i = 1 ; i < board.length ; i ++) {
    for(let j = 1 ; j < board[0].length ; j++) {
      if(board[i][j] === 0) continue
      else {
         board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1
         if(board[i][j] > result) result = board[i][j]
      }
    }
  }
  return Math.pow(result,2)
}