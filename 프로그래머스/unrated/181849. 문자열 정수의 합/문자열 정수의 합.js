function solution(num_str) {
    let arr = [...num_str]
    return arr.reduce((acc,cur) => acc + Number(cur), 0)
}