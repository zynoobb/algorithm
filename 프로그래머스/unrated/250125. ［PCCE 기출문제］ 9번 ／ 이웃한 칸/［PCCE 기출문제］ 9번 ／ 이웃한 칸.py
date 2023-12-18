def solution(board, h, w):
  X,Y = len(board[0]), len(board)
  directions = [[0,1],[0,-1],[1,0],[-1,0]]
  result = 0
  for dx,dy in directions :
    nx, ny = dx+w, dy+h
    if 0 <= nx < X and 0 <= ny < Y and board[h][w] == board[ny][nx]:
      result += 1
  
  return result