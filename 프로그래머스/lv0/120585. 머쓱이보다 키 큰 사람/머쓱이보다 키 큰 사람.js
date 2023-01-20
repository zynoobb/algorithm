function solution(array, height) {
    let higher = []
    
    for(a of array){
      if(a > height){
        higher.push(a)
      }}
    
    return higher.length
}