function solution(nums) {
  let nset = new Set(nums)
  
  return nset.size > nums.length/2 ? nums.length/2 : nset.size
}