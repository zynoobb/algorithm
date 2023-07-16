function solution(my_string, target) {
    const result = my_string.split(target)
    
    return result.length >= 2 ? 1 : 0
}