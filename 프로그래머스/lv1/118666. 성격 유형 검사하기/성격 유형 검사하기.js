function solution(survey, choices) {
  const test = {
  RT : 0,
  CF : 0, 
  JM : 0,
  AN : 0
}

  choices = choices.map(a=> a-=4)
  for(let i = 0 ; i < survey.length ; i++){
     if(survey[i] === "RT") {
       test.RT += choices[i]
     }else if(survey[i] === "TR") {
       test.RT -= choices[i]
     }
    
    if(survey[i] === "CF") {
       test.CF += choices[i]
     }else if(survey[i] === "FC") {
       test.CF -= choices[i]
     }
    
    if(survey[i] === "JM") {
       test.JM += choices[i]
     }else if(survey[i] === "MJ") {
       test.JM -= choices[i]
     }
    
    if(survey[i] === "AN") {
       test.AN += choices[i]
     }else if(survey[i] === "NA") {
       test.AN -= choices[i]
     }
  }
  
  let result = ""
  
  for(let i = 0 ; i < Object.values(test).length ; i ++){
    if(Object.values(test)[i] <= 0) {
      result += Object.keys(test)[i][0]
    } else {
      result += Object.keys(test)[i][1]
    }
  }
  return result
}