const verify = (n) => {
  if(n < 2) return false
  for(let i = 2 ; i <= Math.sqrt(n) ; i ++)
    if(n % i === 0) return false
  
  return true
}

function solution(numbers) {
  const arr = numbers.split('').sort((a,b)=> a-b)
  const table = {}
  let storage = ''
  let result = 0
  const visited = Array.from({length : arr.length}, ()=> false)

  const backTracking = () => {
    if(storage.length === arr.length) return
    else {
      for(let i = 0 ; i < arr.length ; i ++) {
        storage += arr[i]
        
        if(!visited[i]) {
          visited[i] = true

          if(!table[+storage]) {
            table[+storage] = true
            verify(+storage) && result ++
          }
          backTracking()
          visited[i] = false
        }
        storage = storage.slice(0, storage.length - 1)
      }
    }
  }

  backTracking()
  return result
}