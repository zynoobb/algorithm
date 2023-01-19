function solution(ip, db) {
  for(let i = 0 ; i<db.length ; i++){
    if(ip[0] === db[i][0] && ip[1] == db[i][1]){
      return "login"
    }
    if(ip[0] === db[i][0]){
      return "wrong pw"
    } 
  }
  return "fail"
}
