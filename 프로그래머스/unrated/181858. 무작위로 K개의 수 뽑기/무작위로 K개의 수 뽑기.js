function solution(arr, k) {
    let nSet = new Set(arr)
    let result = [...nSet]
    
    let dif = k - result.length
    
    if (dif < 0) return result.slice(0, k)
    
    let addArr = new Array(dif).fill(-1)
    
    return result.concat(addArr)
}