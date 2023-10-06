const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

const getLCM = (x,y) => {
  let a = x
  let b = y

  while(b !==0) {
    let temp = a%b
    a = b
    b = temp
  }
  return (x*y)/a
}

const act = (arr) => {
  const lcm = arr.reduce((a,c)=> {
    return getLCM(a,c)
  },1)
  return lcm
}

function solution(data) {
  const arr = data.split(' ').map(Number).sort((a,b)=> a-b)
  
  const cases = []
  const storage = []
  const visited = Array.from({length : 5}, ()=> false)
  const backTracking = (n) => {
    if(storage.length === 3) {
      cases.push([...storage])
      return
    }

    for(let i = n ; i < 5 ; i ++) {
      if(!visited[i]) {
        visited[i] = true
        storage.push(arr[i])
        backTracking(i+1)
        storage.pop()
        visited[i] = false
      }
    }
  }

  backTracking(0)

  let result = 1000000
  cases.forEach(el => {
    result = result > act(el) ? act(el) : result
  })

  console.log(result)
}

solution(input)  
