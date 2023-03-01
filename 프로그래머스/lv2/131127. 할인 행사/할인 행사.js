function solution(want, number, discount) {
  let arr = discount.map((a,i)=> a = want.indexOf(a))
  let wants = want.map((a,i)=> a = [i,number[i]])
  
  let result = 0
  let product = []
  for(let i = 0 ; i < wants.length ; i ++){
    for(let j = 0 ; j < wants[i][1] ; j++){
      product.push(wants[i][0])
    }
  }
  
  for(let i = 0 ; i < discount.length ; i ++){
    let day10 = arr.slice(i,10+i).sort((a,b)=> a-b)
    if(JSON.stringify(product) == JSON.stringify(day10)) result ++
  }
  return result
}