function solution(bridge_length, weight, truck_weights) {
    let queue = []
    let result = 0
    while (truck_weights.length !== 0) {
      queue.forEach((el)=> el[1]--)
      if(queue.length > 0 && queue[0][1] <= 0) queue.shift()
      
      let enter = [truck_weights[0], bridge_length]
      queue.push(enter)
      
      let sum = queue.reduce((acc,cur)=> {
        return acc + cur[0]
      },0)

      if(sum > weight) queue.pop()
      else truck_weights.shift()
      result ++
    }
    return result + bridge_length
}