function solution(dartResult) {
    const bonus = [ "S", "D", "T" ]
    const option = [ "*", "#" ] 
    const result = [];
    
    let score = ""; 
    for( let i = 0; i < dartResult.length; i++ ) {
        if( isNaN( dartResult[i] ) === false ) {
            score += dartResult[i]
        } else {
            score = Number(score)
            if( bonus.includes( dartResult[i] ) ) {
                if( dartResult[i] === "D" ) {
                    score = Math.pow( score, 2 )
                } else if( dartResult[i] === "T" ) {
                    score = Math.pow( score, 3 )
                }
                result.push( score );
                score = "";
            } else if( option.includes( dartResult[i] ) ) {
                if( dartResult[i] === "#" ) {
                    result[ result.length - 1 ] *= -1
                } else {
                    result[ result.length - 1 ] *= 2
                    if( result.length > 1 ) {
                        result[ result.length - 2 ] *= 2
                    }
                }
            }
        }
    }
    
    return result.reduce(( acc, cur ) => acc + cur)
}
