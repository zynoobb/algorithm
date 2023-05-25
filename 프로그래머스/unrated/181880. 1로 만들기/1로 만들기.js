function solution(num_list) {
  let result = 0
  while(true){
    num_list = num_list.map((el)=> {
      if(el === 1) return el
      else if(el%2===0) {
        result ++
        return el/=2
      } else {
        result ++
        return el = (el-1)/2
      }
    })
    if(num_list.filter((el)=> el !== 1).length === 0) return result
  }
}