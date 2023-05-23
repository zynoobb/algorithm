function solution(myString) {
    myString = [...myString.toLowerCase()]
    
    let result =  myString.map((el)=> {
        if(el === "a") return el = "A"
        else return el
    })
    
    return result.join("")
}