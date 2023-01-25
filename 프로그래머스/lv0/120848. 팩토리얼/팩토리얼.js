function solution(n) {
 let a = 1
  for(let i = 1 ; i <= n ; i++){
    a = a*i
   if(a == n){
     return i
   }else if(a > n){
     return i-1
   }
  }
}