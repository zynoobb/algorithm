const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (x) {
    const node = new Node(x)
    if(this.length === 0) {
      this.head = node
      this.head.next = null
    } else {
      this.tail.next = node
    }
    this.tail = node
    this.length  ++
  }

  pop () {
    if(this.length === 0) {
      return -1
    } else {
      const popItem = this.head
      this.head = this.head.next
      this.length --
      return popItem.data
    }
  }

  size () {
    return this.length
  }

  empty () {
    if(this.length === 0) {
      return 1
    } else {
      return 0
    }
  }

  front () {
    if(this.length === 0) {
      return -1
    } else {
      return this.head.data
    }
  }

  back () {
    if(this.length === 0) {
      return -1
    } else {
      return this.tail.data
    }
  }
}

function solution(data) {
  const result = []
  const queue = new Queue()

  data.forEach((el)=> {
    const [cmd, n] = el.split(" ")
    if(cmd === "push") queue.push(n)
    else result.push(queue[cmd]())
  })

  console.log(result.join("\n"))
}
  
solution(input)

