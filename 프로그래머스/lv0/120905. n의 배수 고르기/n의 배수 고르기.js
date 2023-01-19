function solution(n, numlist) {
    return numlist.filter((a)=>{
      return a%n === 0
    })
}