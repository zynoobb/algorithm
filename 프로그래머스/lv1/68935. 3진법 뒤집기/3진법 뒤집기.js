function solution(n) {
let thr = n.toString(3).split("").reverse().join('')
return parseInt(thr, 3)
}