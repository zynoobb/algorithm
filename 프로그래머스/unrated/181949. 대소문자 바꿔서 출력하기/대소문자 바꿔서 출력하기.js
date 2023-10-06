const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const transform = (s) => {
       return s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()
    }

    const result = line.split('').map(el => transform(el)).join('')
    console.log(result)
})