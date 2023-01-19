function solution(phone_number) {
    let answer = phone_number.substr(phone_number.length-4)
    return answer.padStart(phone_number.length,"*")
}