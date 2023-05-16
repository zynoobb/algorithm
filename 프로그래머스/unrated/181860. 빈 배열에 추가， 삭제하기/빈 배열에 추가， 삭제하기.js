function solution(arr, flag) {
    let result = []
    
    arr.forEach((el,idx)=> {
        if(flag[idx] === true) {
            let temp = new Array(el*2).fill(el)
            result = result.concat(temp)
            
        } else {
         result = result.slice(0, result.length - el)
        }
    })
    return result
}