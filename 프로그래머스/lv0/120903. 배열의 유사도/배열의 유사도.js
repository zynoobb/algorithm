function solution(s1, s2) {
    let answer = 0
    for(a of s1){
        for(b of s2){
            if(a == b){
                answer ++
            }
        }
    }
    return answer
    
    
}



