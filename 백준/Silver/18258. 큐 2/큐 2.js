const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(item) {
    const node = new Node(item)
    if(this.head === null) {
      this.head = node
      this.head.next = null
    } else {
      this.tail.next = node
    }
    this.tail = node
    this.length ++
  }

  empty() {
    if(this.length === 0) {
      return 1
    } else {
      return 0
    }
  }
  
  pop() {
    if(this.empty() === 1) return -1
    const popItem = this.head
    this.head = this.head.next
    this.length --
    return popItem.item
  }

  size () {
    return this.length
  }

  front() {
    if(this.empty() === 1) return -1
    return this.head.item
  }

  back() {
    if(this.empty() === 1) return -1
    return this.tail.item
  }
}

function solution(data) {
  const result = []
  const queue = new Queue()
  data.forEach((el)=> {
    const [cmd, num] = el.split(' ')
    if(cmd === "push") queue.push(Number(num))
    else result.push(queue[cmd]())
  })

  console.log(result.join("\n"))
}
  
solution(input)