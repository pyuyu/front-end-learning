/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let paths = []
    function dfs(root, sum, paths, path){
        if(root === null) return paths
        path.push(root.val)
        sum -= root.val
        if(sum === 0 && !root.left && !root.right){
            paths.push(path.slice(0))
        }
        dfs(root.left, sum, paths, path)
        dfs(root.right, sum, paths, path)
        path.pop()
    }
    dfs(root, sum, paths, [])
    return paths

};
// @lc code=end

