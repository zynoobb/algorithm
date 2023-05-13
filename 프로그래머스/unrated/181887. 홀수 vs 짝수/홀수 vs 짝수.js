function solution(num_list) {
    let odd = 0
    let even = 0
    
    num_list.forEach((el,idx)=> {
        if(idx%2 === 0) even += el
        else odd += el
    })
    
    return odd >= even ? odd : even
}