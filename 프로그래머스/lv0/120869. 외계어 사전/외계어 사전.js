function solution(spell, dic) {
  let result = 0
    for(let i = 0 ; i < dic.length ; i++){
      for(let j = 0 ; j < spell.length ; j++){
        if(dic[i].includes(spell[j])){
          result ++
          console.log(result)
          }
      } 
          if(result === spell.length){
            return 1
          }else {
            result = 0
       }
    }
  return 2
}