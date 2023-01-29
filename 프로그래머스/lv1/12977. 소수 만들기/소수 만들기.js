function solution(nums) {
  nums = nums.sort((a,b)=>a-b)
  let temp = []
  
  
  for(let i = 0 ; i<nums.length ; i++){
    for(let j = i+1 ; j<nums.length ; j++){
      for(let k = j+1 ; k <nums.length ; k++){
       temp.push(nums[i]+nums[j]+nums[k])  
      }
    }
  }
  
  let nonPrime = []
  
  for(let i = 0 ; i < temp.length ; i++){
    for(let j = 2 ; j < temp[i] ; j++){
      if(temp[i]%j == 0){
        nonPrime.push(temp[i])
        break
      }
    }
  }
  
  return temp.length - nonPrime.length
}