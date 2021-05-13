function bfs(root){
  if(!root) return
  let queue = []
  queue.push(root)
  while(queue.length > 0 ){
    let node = queue.shift()
    console.log(node.value)
    if(node.right){
      queue.push(node.right)
    }
    if(node.left){
      queue.push(node.left)
    }
  }
}

function dfs(root){
  if(!root) return
  let stack = []
  queue.push(root)
  while(stack.length > 0){
    let node = stack.pop()
    console.log(node.value)
    if(node.right){
      queue.push(node.right)
    }
    if(node.left){
      queue.push(node.left)
    }
  }
}