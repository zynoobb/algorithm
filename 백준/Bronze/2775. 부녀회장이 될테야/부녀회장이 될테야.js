const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()
const inputData = Array.from({length : input.length/2}, (el, idx)=> {
  return [input[2 * idx], input[2 * idx + 1]]
})

function solution(data) {
  const sorted = [...data].sort((a,b)=> {
    if(a[0] !== b[0]) return b[0] - a[0]
    else return b[1] - a[1]
  })
  const [maxK, maxN] = sorted[0]

  let apartment = Array.from({length : Number(maxK) + 1}, (_, idx)=> {
    return idx === 0 ? Array.from({length : maxN}, (_, i)=> i + 1) : Array.from({length : maxN }, ()=> 1)
  })
  
  const makingApartment = () => {
    for(let k = 1 ; k < apartment.length ; k++) {
      let temp = 1
      for(let n = 1 ; n < apartment[k].length ; n++) {
        let residents = apartment[k-1][n] + temp
        temp = residents
        apartment[k][n] = residents
      }
    }
  }
  makingApartment()

  const result = data.map((el)=> {
    const [k,n] = el
    return apartment[k][n - 1]
  })
  
  console.log(result.join("\n"))
}
solution(inputData)
