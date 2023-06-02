function solution(tickets) {
  let result = []
  
  let sorted = tickets.sort((a,b)=> {
    if(a[1] > b[1]) return 1
    if(a[1] < b[1]) return -1
  })
  
  let used = Array.from({length : tickets.length}, () => false)

  const recursive = (depart, depth) => {
    result.push(depart)
    if (depth === tickets.length) return true 
    for (let i = 0 ; i < sorted.length ; i++) {
      if (sorted[i][0] === depart && !used[i]) {
        used[i] = true
        if (recursive(sorted[i][1], depth + 1)) {
          return true 
        }
        used[i] = false 
      }
    }
    result.pop() 
    return false
  }
  
  recursive("ICN", 0)
  
  return result
}