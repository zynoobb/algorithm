function solution(arr) {
  let result = 0
  let before = JSON.stringify(arr)
  
  while(true) {
    arr = arr.map((el)=> {
      if(el >= 50 && el%2 === 0) return el/2
      else if(el < 50 && el%2 === 1) return el*2 + 1
      else return el
    })
    if(before === JSON.stringify(arr)) return result
    else before = JSON.stringify(arr)
    result ++
  }
}