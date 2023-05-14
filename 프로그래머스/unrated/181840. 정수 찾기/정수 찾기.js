function solution(num_list, n) {
    let result = num_list.filter(el=> el === n)
    return result.length > 0 ? 1 : 0
}