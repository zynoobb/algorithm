const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class Deck {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push_front(value) {
    const node = new Node(value)
    if(!this.length) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.length ++
  }

  pop_front() {
    if(!this.length) return -1
    const shift = this.head
    this.head = this.head.next
    this.length === 1 ? this.head = null : this.head.prev = null
    this.length --
    return shift.value
  }

  push_back(value) {
    const node = new Node(value)
    if(!this.length) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length ++
  }

  pop_back() {
    if(!this.length) return -1    
    const pop = this.tail
    this.tail = this.tail.prev
    this.length === 1 ? this.tail = null : this.tail.next = null
    this.length --
    return pop.value
  }
  
  size () {
    return this.length
  }

  empty () {
    return this.length ? 0 : 1
  }

  front () {
    return !this.length ? -1 : this.head.value
  }

  back () {
    return !this.length ? -1 : this.tail.value
  }
}

function solution(data) {
  data.shift()

  const deck = new Deck()
  const result = []

  data.forEach((el)=> {
    const [cmd, num] = el.split(' ')
    result.push(deck[cmd](num))
  })
  console.log(result.filter(v => !isNaN(v)).join('\n'))
}

solution(input)
