function solution(dots) {
    let arr = []
    
    for(let i = 0 ; i < dots.length ; i++){
      for(let j = i+1 ; j < dots.length ; j++){
        let difX = dots[i][0]-dots[j][0]
        let difY = dots[i][1]-dots[j][1]
        arr.push(difX/difY)
    } 
  }
  
  for(let i = 0 ; i < arr.length/2 ; i ++){
      if(arr[i] === arr[arr.length -1 - i]){
      return 1  
      }
    }  
  return 0
}