function solution(arr) {
  const addArr = (diff) => {
    diff = Math.abs(diff)
    let temp = new Array(segLeng).fill(0)
    for(let i = 0 ; i < diff ; i ++) arr.push(temp)
  }
  
  const addSeg = (diff) => {
    let temp = new Array(diff).fill(0)
    for(let i = 0 ; i < arr.length ; i++) arr[i] = arr[i].concat(temp)
  }
  
  let arrLeng = arr.length
  let segLeng = arr[0].length
  let diff = Math.abs(arrLeng - segLeng)
  if(diff === 0) return arr
  arrLeng < segLeng ? addArr(diff) : addSeg(diff)
  
  return arr
}