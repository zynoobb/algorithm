function solution(num_list) {
  let odd = ""
  let even = ""
  num_list.forEach((el)=> el%2===1 ? odd+=el : even+=el)
  
  return Number(odd) + Number(even)
}