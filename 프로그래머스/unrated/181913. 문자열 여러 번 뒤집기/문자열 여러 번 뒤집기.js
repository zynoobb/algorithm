function solution(my_string, queries) {
  queries.forEach((el)=> {
    const [a,b] = el
    const arr = [...my_string]
    const sentence = arr.slice(a,b+1)
    const reverse = sentence.reverse().join("")
    arr.splice(a,b-a+1, reverse)
    my_string = arr.join("")
  })
  
  return my_string
}