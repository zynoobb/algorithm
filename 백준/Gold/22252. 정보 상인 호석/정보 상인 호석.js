const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [null];
    this.cnt = 0;
  }

  heappush(value) {
    this.heap.push(value);
    this.cnt++;

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  heappop() {
    if (this.cnt !== 0) this.cnt--;
    if (this.heap.length === 2) return this.heap.pop();

    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      const temp = this.heap[currentIndex];

      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = leftIndex + 1;
    }

    return returnValue;
  }
  top() {
    return this.heap[1];
  }

  heapreturn() {
    return this.heap;
  }

  size() {
    return this.cnt;
  }
}

function solution(data) {
  data.shift();

  const table = {},
    pqTable = {};
  let result = 0;

  let idx = 1;
  data.forEach((el) => {
    const seller = el.split(" ")[1];
    if (!table[seller]) {
      pqTable[idx] = new MaxHeap();
      table[seller] = idx++;
    }
  });

  data.forEach((el) => {
    const [order, seller, cnt, ...arr] = el
      .split(" ")
      .map((el) => (!isNaN(el) ? Number(el) : el));

    if (order === 1) {
      arr.forEach((el) => {
        pqTable[table[seller]].heappush(el);
      });
    } else {
      for (let i = 0; i < cnt; i++) {
        if (!pqTable[table[seller]].size()) break;
        else result += pqTable[table[seller]].heappop();
      }
    }
  });

  console.log(result);
}

solution(input);
