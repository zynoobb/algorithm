function solution(array) {
    let answer = 0;
   let str = array.toString()
   for(k=0;k<str.length;k++)
       if(str[k]==="7"){answer++;}
        return answer
}