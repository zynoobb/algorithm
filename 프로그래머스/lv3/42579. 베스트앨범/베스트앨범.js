function solution(genres, plays) {
  let obj = {}
  
  genres.forEach((el,idx) => {
    obj[el] = (obj[el] || 0) + plays[idx]
  })
  
  let temp = Object.entries(obj).sort((a,b) => b[1] - a[1])
  let sortedList = genres.map((el,idx)=> [obj[el], el, plays[idx], idx]).sort((a,b)=> {
    if(a[0] > b[0]) {
      return -1
    } else if(a[0] < b[0]) {
      return 1
    } else if(a[2] > b[2]) { 
      return -1
    }
  })
 
  let playTimes = {}
  temp.forEach((el)=> playTimes[el[0]] = 0)
  let result = []
  
  sortedList.forEach((el) => {
    if(playTimes[el[1]] < 2) {
      result.push(el[3])
    }
  playTimes[el[1]] ++
  })
  
  return result
}