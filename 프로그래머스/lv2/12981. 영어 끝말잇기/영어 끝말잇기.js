function solution(n, words) {
  let input = []
  
  for(let i = 0 ; i < words.length ; i++){
    if(i == 0){
      input.push(words[i])
      continue
    }
    
    if(!input.includes(words[i])
      && input[input.length -1][input[input.length -1].length -1] 
       === words[i][0]){
      input.push(words[i])
    }else {
      return [(i%n)+1,Math.ceil((input.length+1)/n)]
    }
  }
  return [0,0]
}