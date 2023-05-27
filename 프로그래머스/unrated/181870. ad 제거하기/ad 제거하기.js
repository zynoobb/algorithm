function solution(strArr) {
    return strArr.filter((el)=> {
        if(!el.includes("ad")) return el
    })
}