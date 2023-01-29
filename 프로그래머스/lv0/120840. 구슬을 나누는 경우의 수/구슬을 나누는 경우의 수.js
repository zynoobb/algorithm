function solution(balls, share) {
    function fac(s){
    let temp = 1
    for(let i = 1 ; i <= s ; i++){
      temp = temp * i 
    }
    return temp
  }
  
  let n = fac(balls)
  let m = fac(share)
  let n_m = fac(balls-share)
  
  return Math.round(n/(n_m*m))
}