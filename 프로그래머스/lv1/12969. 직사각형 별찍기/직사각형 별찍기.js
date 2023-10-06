process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n,m] = data.split(' ').map(Number)
    const result = Array.from({length : m}, ()=> {
        return '*'.repeat(n)
    })
    
    console.log(result.join('\n'))
});