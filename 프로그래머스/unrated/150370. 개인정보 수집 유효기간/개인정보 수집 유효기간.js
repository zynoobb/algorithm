function solution(today, terms, privacies) {
  let result = []
  
  const dating = (x) => {
    let [date, exp] = x.split(" ")
    let [year, month, day] = date.split(".")
    return exp === undefined 
      ? Number(year*28*12) + Number(month*28) + Number(day) 
      : Number(year*28*12) + Number(month*28)+ Number(day) +Number(exp*28)
  }
  
  for(let i = 0 ; i < terms.length ; i++){
    for(let j = 0 ; j < privacies.length ; j ++){
      let [type,exp] = terms[i].split(" ")
      if(privacies[j].at(-1) === type) {
        privacies[j] = privacies[j].replace(type, exp)
      }
    }
  }
  
  for(let i = 0 ; i < privacies.length ; i++){
    if(dating(today) >= dating(privacies[i])){
      result.push(i+1)
    }
  }
  
  return result
}