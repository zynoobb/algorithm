function solution(my_string) {
  return [...my_string].filter((a)=>Number(a)).reduce((a,b)=>Number(a)+Number(b))

}