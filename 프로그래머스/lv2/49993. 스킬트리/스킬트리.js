function solution(skill, skill_trees) {
let result = skill_trees.length
  
  for(let i = 0 ; i < skill_trees.length ; i++){
    let temp = []
    for(let j = 0 ; j < skill.length ; j++){
      skill_trees[i].indexOf(skill[j])!==-1 
        ? temp.push(skill_trees[i].indexOf(skill[j])) 
        : temp.push(1000)
    }
    
    let sortedTemp = [...temp].sort((a,b)=> a-b)
    
    for(let i = 0 ; i < temp.length ; i++){
      if(temp[i] !== sortedTemp[i]){
        result --
        break
      }
    }
  }
  return result
}