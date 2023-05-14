function solution(myString, pat) {
    let lastIndex = myString.lastIndexOf(pat) + pat.length
    return myString.slice(0, lastIndex)
}