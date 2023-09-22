const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const makingTable1 = (table1) => {
  const arr = [500,300,200,50,30,10]
  let i = 1
  for(let j = 0 ; j < arr.length ; j ++) {
    for(let k = 0 ; k <= j ; k ++) {
      table1[i++] = arr[j]
    }
  }
}

const makingTable2 = (table2) => {
  const arr = Array.from({length : 5}, (_, idx)=> 512 / 2**idx)
  let i = 1
  for(let j = 0 ; j < arr.length ; j ++) {
    for(let k = 0 ; k < 2 ** j ; k ++) {
      table2[i++] = arr[j]
    }
  }
}

function solution(data) {
  data.shift()
  const [table1, table2] = [{},{}]
  
  makingTable1(table1)
  makingTable2(table2)
  
  const act = (el) => {
    const [a,b] = el.split(' ').map(Number)
    return ((table1[a]||0) + (table2[b]||0)) * 10000
  }
  
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)
