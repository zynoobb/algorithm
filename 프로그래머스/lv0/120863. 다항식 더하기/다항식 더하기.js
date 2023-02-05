function solution(s) {
    let beforeX = 0
  let notX = 0
  
  s = s.split(" ").filter((x)=> x !== '+')
  
  for(let i = 0 ; i < s.length ; i++){
    if(s[i] == 'x'){
      beforeX ++
      continue
    } else if (s[i].includes("x")){
      beforeX += Number(s[i].slice(0,-1))
    } else {
      notX += Number(s[i])
    }
  }

  if(beforeX === 0 && notX !== 0) return String(notX)
  if(beforeX === 1 && notX === 0) return "x"
  if(beforeX === 1 && notX !== 0) return `x + ${notX}`
  if(beforeX !== 0 && notX == 0) return String(beforeX)+'x'
  if(beforeX !== 0 && notX !== 0) return `${beforeX}x + ${notX}`
  
  return '0'
}