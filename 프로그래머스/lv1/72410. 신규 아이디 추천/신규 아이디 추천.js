const permission = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.'

function solution(new_id) {
  new_id = new_id.toLowerCase().split("")
  
  let answer = new_id.filter(str => {
    return permission.includes(str)
  })
  
  answer = answer.filter((str,i)=>{
    return str !== "." || (str === '.' && answer[i+1] !== '.')
  })
  
  if(answer[0] === '.'){
    answer.splice(0,1)
  }
  
  const removeLastDot = () => {
    if(answer[answer.length -1] === ".") {
    answer.splice(answer.length -1, 1)
    }  
  }
  removeLastDot()
  
  
  if(answer.length === 0){
    answer.push('a')
  }
  
  if(answer.length >= 16){
    answer = answer.slice(0,15)
    removeLastDot()
  }
  
  if(answer.length <= 2){
    const add = new Array(3 - answer.length)
      .fill(answer.at(-1))
  
    answer = answer.concat(add)
    return answer.join("")
  }
  return answer.join("")
}