function solution(x) {
    let sum = [...String(x)].reduce((acc,cur)=>
                                    Number(acc)+Number(cur))
    return x%sum == 0
}