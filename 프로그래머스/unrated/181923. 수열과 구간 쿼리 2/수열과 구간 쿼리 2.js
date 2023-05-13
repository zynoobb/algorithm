function solution(arr, queries) {
    let result = []
    
    queries.forEach((el)=> {
        const [s,e,k] = el
        const temp = arr.slice(s,e + 1)
          .filter((el)=> el > k)
          .sort((a,b)=> a-b)
        
        temp.length !== 0 ? result.push(temp[0]) : result.push(-1)
    })
    return result
}