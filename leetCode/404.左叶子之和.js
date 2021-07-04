/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0
  if (!root) return 0
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val
  }
  sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
  return sum

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sumOfLeftLeaves;
// @after-stub-for-debug-end