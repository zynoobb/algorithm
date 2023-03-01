function solution(record) {
  let result = []
  let obj = {}
  for(let i = 0 ; i < record.length ; i++){
    let [action, id, name] = record[i].split(" ")
    if(action === "Enter" || action === "Change")obj[id] = name  
  }
  
  for(let i = 0 ; i < record.length ; i++){
    let [action, id, name] = record[i].split(" ")
    if(action === 'Enter') result.push(`${obj[id]}님이 들어왔습니다.`)
    if(action === "Leave") result.push(`${obj[id]}님이 나갔습니다.`)
  }
  return result
}