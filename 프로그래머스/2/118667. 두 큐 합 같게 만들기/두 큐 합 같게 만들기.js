class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  empty() {
    if (this.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  pop() {
    if (this.empty() === 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length--;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  front() {
    if (this.empty() === 1) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty() === 1) return -1;
    return this.tail.item;
  }
}

function solution(queue1, queue2) {
  const aQueue = new Queue(),
    bQueue = new Queue();
  let aSum = 0,
    bSum = 0;

  queue1.forEach((el, idx) => {
    aSum += el;
    aQueue.push(el);
    bSum += queue2[idx];
    bQueue.push(queue2[idx]);
  });

  let cnt = 0;

  const limit = (queue1.length + queue2.length + 1) * 2;
  while (cnt <= limit && !aQueue.empty() && !bQueue.empty()) {
    if (aSum === bSum) {
      return cnt;
    } else {
      const aFront = aQueue.front(),
        bFront = bQueue.front();

      if (aSum > bSum) {
        bQueue.push(aQueue.pop());
        bSum += aFront;
        aSum -= aFront;
      } else {
        aQueue.push(bQueue.pop());
        aSum += bFront;
        bSum -= bFront;
      }
    }
    cnt++;
  }

  return -1;
}
