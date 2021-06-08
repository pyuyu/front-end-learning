/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return root
  let queue = []
  queue.push(root)
  while(queue.length > 0){
    let node = queue.shift()
    let temp = node.right
    node.right = node.left
    node.left = temp
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }
  return root

};
// @lc code=end

