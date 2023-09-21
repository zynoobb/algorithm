const verifyNum = (s) => {
  const nums = '0123456789'
  return nums.includes(s)
}

const compareStr = (a,b) => {
  const [str1, str2] = [a,b].map(el => el.toLowerCase())
  return str1.localeCompare(str2)
}

function solution(files) {
  const mapping = files.map(str => {
    let head = ''
    let number = ''
    let tail = ''

    let [headCheck, numberCheck] = [false, false]
    for(let i = 0 ; i < str.length ; i ++) {
      if(headCheck && numberCheck) tail += str[i]
      else if(!verifyNum(str[i])) {
          head += str[i]
          if(verifyNum(str[i+1])) headCheck = true
      }
      else if(verifyNum(str[i])) {
        number += str[i]
        if(!verifyNum(str[i+1])) numberCheck = true  
      }
    }
    return [head,number,tail]
  })

  const tails = [...mapping].map(el => el[2])

  const result = mapping.sort((a,b)=> {
    if(compareStr(a[0],b[0])) return compareStr(a[0],b[0])
    else if(!compareStr(a[0],b[0])) return Number(a[1]) - Number(b[1])
    else if(Number(a[1]) === Number(b[1])) {
      return tails.indexOf(a[2]) - tails.indexOf(b[2]) 
    }
  }).map(el => el.join(''))

  return result
}
