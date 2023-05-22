function solution(x1, x2, x3, x4) {
    const underAngle = (a,b) => (a || b)
    const upperAngle = (a,b) => (a && b)
    
    return upperAngle(underAngle(x1,x2), underAngle(x3,x4))
}