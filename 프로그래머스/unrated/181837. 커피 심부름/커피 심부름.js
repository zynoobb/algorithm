function solution(order) {
    let result = 0
    order.forEach((el)=> {
        if(el.includes("cafelatte")) {
            result += 5000
        } else result += 4500
    })
    return result
}