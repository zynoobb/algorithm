function solution(todo_list, finished) {
    return todo_list.filter((el,idx)=> {
        if(finished[idx] === false) return el
    })
}