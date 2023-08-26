const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().split('\n')

const decrypt = (s,k) => {
  if(s === " ") return " "
  else {
    const charCode = k.charCodeAt() - 96
    const keyCode = s.charCodeAt() - charCode > 96 ? s.charCodeAt() - charCode : s.charCodeAt() - charCode + 26
    return String.fromCharCode(keyCode)
  }
}

function solution(data) {
  const [str, pass] = data

  let result = ""
  for(let i = 0 ; i < str.length ; i ++) {
    result += decrypt(str[i], pass[i%pass.length])
  }

  console.log(result)
}

solution(input)