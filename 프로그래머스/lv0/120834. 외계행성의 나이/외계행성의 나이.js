function solution(age) {
let alp = ['a','b','c','d','e','f','g','h','i','j']
    let result = ''
    let str = String(age)
    console.log(str)
      
    for(let i = 0 ; i < str.length; i++){
      result +=alp[str[i]]
    }
    return result
}