function solution(numbers, target) {
    let result = 0
    let queueIdx = 0
    const queue = [{ index: 0, sum: 0 }]
    while (queue.length > queueIdx) {
        const { index, sum } = queue[queueIdx]
        if (index === numbers.length) {
            if (sum === target) result++
        } else {
            queue.push({ index: index + 1, sum: sum + numbers[index] })
            queue.push({ index: index + 1, sum: sum - numbers[index] })
        }
      queueIdx++
    }
    return result
}
