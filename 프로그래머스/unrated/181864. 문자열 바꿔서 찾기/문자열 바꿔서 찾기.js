function solution(myString, pat) {
   const act = (str) => {
     const result = [...str].map((el)=> {
     if(el === "A") return "B"
     else return "A"
   })
   return result
  }
   
  const transform = act(myString).join("")
  return transform.includes(pat) ? 1 : 0
}