const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
    this.cnt = 0;
  }

  heappush(value) {
    this.heap.push(value);
    this.cnt++;

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
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
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      const temp = this.heap[currentIndex];

      if (this.heap[leftIndex] > this.heap[rightIndex]) {
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
  const [_, ...arr] = data.map(Number);

  const hq = new MinHeap();
  arr.forEach((el) => hq.heappush(el));

  let result = 0;

  while (hq.size() > 1) {
    const item1 = hq.heappop(),
      item2 = hq.heappop();

    const sum = item1 + item2;
    result += sum;
    hq.heappush(sum);
  }

  console.log(result);
}

solution(input);
