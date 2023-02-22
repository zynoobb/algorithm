function solution(id_list, report, k) {
  report = [...new Set(report)]
  
  let obj = {}
  let stopped = []
  
  for(let i = 0 ; i < report.length ; i ++){
    obj[report[i].split(" ")[1]] = (obj[report[i].split(" ")[1]]|| 0) + 1
    if(obj[report[i].split(" ")[1]] >= k) stopped.push(report[i].split(" ")[1])
  }
  
  let result = new Array(id_list.length).fill(0)
  let list = report.filter((a)=> stopped.includes(a.split(" ")[1])).map((b)=> b = b.split(" ")[0])  
  
  for(let i = 0 ; i < id_list.length ; i++){
    for(let j = 0 ; j < list.length ; j++){
      if(id_list[i] == list[j]){
        result[i] ++
      }
    }  
  }

  return result
}