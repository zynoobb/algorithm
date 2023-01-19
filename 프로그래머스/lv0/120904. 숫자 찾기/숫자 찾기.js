function solution(num, k) {
    let arr = [...String(num)]
    let answer = arr.indexOf(String(k))
    
    if(answer == -1){
        return -1
    } else {
        return answer+1
    }
}