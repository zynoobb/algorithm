const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')



function solution(data) {
  const [[N,_], ...arr] = data.map(el => el.split(' ').map(Number))

  const findMin = (n) => 
    Math.min(...arr.map(el => el[n]))
  
  const [packagePrice, unitPrice] = [findMin(0), findMin(1)]

  const onlyPackage = packagePrice * Math.ceil(N / 6)
  const onlyUnit = unitPrice * N
  const mixed = packagePrice * Math.floor(N / 6) + unitPrice * (N % 6)

  console.log(Math.min(onlyPackage, onlyUnit, mixed))
}

solution(input)

