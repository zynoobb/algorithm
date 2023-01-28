function solution(letter) {
let unit = letter.split(" ")
  let result = ""
  let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
  
  for(let i = 0 ; i < unit.length ; i++){
    for(let j = 0 ; j < Object.keys(morse).length ; j ++){
      if(unit[i] === Object.keys(morse)[j]){
        result += Object.values(morse)[j]
      }
    }
  }
  return result
}