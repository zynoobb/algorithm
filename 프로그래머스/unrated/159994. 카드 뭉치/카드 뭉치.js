function solution(cards1, cards2, goal) {
   let goal1 = goal.filter((a)=> a = cards1.includes(a))
   let goal2 = goal.filter((a)=> a = cards2.includes(a))
   
   for(let i = 0 ; i < goal1.length ; i ++){
     if(goal1[i] !== cards1[i]) return "No"
   }
  
   for(let i = 0 ; i < goal2.length ; i ++){
     if(goal2[i] !== cards2[i]) return "No"
   }
  
   return "Yes"
}