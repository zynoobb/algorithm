function solution(str1, str2) {
    let result = ""
    str1 = [...str1]
    str1.forEach((el,idx)=> result += el+str2[idx])
    return result
}