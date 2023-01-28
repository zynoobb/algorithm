function solution(n) {
for(let i = n+1 ; i < 1000000 ; i ++){
    
    if([...n.toString(2)].reduce((a,c)=>Number(a)+Number(c)) === [...i.toString(2)].reduce((a,c)=>Number(a)+Number(c))){
      return i
    }
  }
}