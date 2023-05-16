function solution(arr) {
    let result = []
    
    for(let i = 0 ; i < arr.length ; i ++) {
        if(result.at(-1) === arr[i]) {
            result.pop()
        } else result.push(arr[i])        
    }
    
    return result.length !== 0 
        ? result 
        : [-1]    
}