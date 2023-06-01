function solution(arr, n) {
    return arr.length %2 === 1
      ? arr.map((el,idx)=> {
        if(idx%2 === 0) return el + n
        else return el
    })
      : arr.map((el,idx)=> {
        if(idx%2 === 1) return el + n
        else return el
    })
}