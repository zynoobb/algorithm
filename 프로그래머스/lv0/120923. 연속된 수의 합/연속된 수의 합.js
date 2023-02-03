function solution(num, total) {
    let result = new Array(num).fill(Math.floor(total/num))
    
    return num%2 == 1 ? 
      result.map((x,i)=>x = x-Math.floor(num/2)+i)
    : result.map((x,i)=>x = x-Math.floor(num/2)+1+i)
}