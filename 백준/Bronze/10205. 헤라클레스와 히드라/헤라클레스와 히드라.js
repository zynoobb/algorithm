const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

  const n = +input.shift()
const act = (heads, actions,idx) => {
  actions.split('').forEach(el => heads += el === 'b' ? -1 : 1)
  const reduceIdx = (idx + 2)/2
  
  const storage = reduceIdx !== n 
    ? [`Data Set ${reduceIdx}:`, heads,'']
    : [`Data Set ${reduceIdx}:`, heads]
  
  return storage.join('\n')
}

function solution(data) {
  const result = []

  for(let i = 0 ; i < data.length ; i += 2) 
    result.push(act(+data[i],data[i+1],i))  
  
  console.log(result.join('\n'))
}

solution(input)