function solution(lottos, win_nums) {
  let result = []
  let zero = 0
  
  for(let i= 0 ; i < win_nums.length ; i++){
    if(win_nums.includes(lottos[i])) result.push(true)
    if(lottos[i] === 0) zero ++
  }
  
  result = result.length
  return [ (result + zero) !==0 ?
          7 - (result + zero) :
          6 - (result + zero),
          result !== 0 
          ? 7 - result :
            6 - result]
}