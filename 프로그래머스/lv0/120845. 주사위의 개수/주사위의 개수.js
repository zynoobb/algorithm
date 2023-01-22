function solution(box, n) {
    let size = box.map((x)=> x=x-x%n).map((a)=>a/n)
  
    return size[0]*size[1]*size[2]
}