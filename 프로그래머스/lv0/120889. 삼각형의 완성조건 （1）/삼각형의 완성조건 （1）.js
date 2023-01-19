function solution(sides) {
    var answer = 0;
    let sidessum = 0;
    for(let i=0; i<sides.length ; i++){
        sidessum += sides[i];
}
    if(sidessum - 2*Math.max(...sides)>0)
            {return 1;}
             else {
                 return 2;}
}