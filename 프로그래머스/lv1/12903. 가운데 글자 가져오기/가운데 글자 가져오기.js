function solution(s) {
    let mid = Math.floor(s.length/2)
  return s.length%2 ==1 ? s[mid] : s.substr(mid-1,2)
}