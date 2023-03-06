function solution(s, skip, index) {
  let alp = "abcdefghijklmnopqrstuvwxyz"
  
  for(let i = 0 ; i < skip.length ; i ++){
    alp = alp.replace(skip[i],"")
  }
  
  let leng = alp.length
  return [...s].map((a)=> a = alp[(alp.indexOf(a)+index)%leng]).join("")
}