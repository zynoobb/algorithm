function solution(fees, records) {
  let obj = {}
  
  for(let i = 0 ; i < records.length ; i++){
    let [time, car, action] = records[i].split(" ")
    let [hour, sec] = time.split(":")
    let amount = Number(hour*60) + Number(sec)
    
    if(action === "IN"){
      obj[car] = (obj[car]||0) - amount
    } else {
      obj[car] = (obj[car]||0) + amount
    }
  }
  
  for(let el in obj){
    if(obj[el] <= 0) obj[el] += 1439
  }
  
  let arr = Object.entries(obj)
    .sort((a,b)=> (a[0]) - b[0])
  
  let result = new Array(arr.length).fill(fees[1])
  
  for(let i = 0 ; i < arr.length ; i ++){
    let addTime = arr[i][1] - fees[0]
    if( addTime > 0){
      result[i] += Math.ceil(addTime/fees[2])*fees[3]
    }    
  }
return result
}