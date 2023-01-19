function solution(s) {
    let arr = s.split(' ').map(Number)
    let result = []
  
    arr.sort((a,b)=>a-b)
    result.push(arr[0],arr[arr.length-1])
    
    return result.join(" ")
}