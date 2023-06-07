function solution(n, computers) {
  let network = []
  let used = Array.from({ length: n }, () => false)

  const recursive = (idx, temp) => {
    if(used[idx]) return
    used[idx] = true
    temp.push(idx)

    for(let j = 0; j < computers[idx].length; j++) {
      if(j === idx) continue
      if(computers[idx][j] === 1) {
        if(!temp.includes(j)) {
          recursive(j, temp)
        }
      }
    }
  }

  for(let i = 0; i < n; i++) {
    if(!used[i]) {
      let temp = []
      recursive(i, temp)
      network.push(temp)
    }
  }

  return network.length
}