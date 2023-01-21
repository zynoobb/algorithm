function solution(rsp) {
    let result = ''
    for(a of rsp){
        if(a == 2){
            result += 0
        }else if(a == 5){
            result += 2
        }else if(a == 0){
            result += 5
        }
    }
    return result
}