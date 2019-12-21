
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber){
    let res = [], curr_sum = 0, path = []
    dfs(root, expectNumber, path, curr_sum, res)
    return res
    
    function dfs(node, expectNumber, path, curr_sum, res){
        if(node === null){
            return res
        }
        path.push(node.val)
        curr_sum += node.val
        if(curr_sum === expectNumber && !node.left && !node.right){
            res.push(path.slice(0))
        }
        dfs(node.left, expectNumber, path, curr_sum, res)
        dfs(node.right, expectNumber, path, curr_sum, res)
        path.pop()

    }
}