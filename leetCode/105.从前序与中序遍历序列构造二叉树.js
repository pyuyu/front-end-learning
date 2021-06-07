/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }
var buildTree = function (preorder, inorder) {
  return buildTreeHelper(preorder, 0, preorder.length, inorder, 0, inorder.length)
};

function buildTreeHelper(preorder, pStart, pEnd, inorder, iStart, iEnd) {
  if (pStart === pEnd) {
    return null
  }
  let rootValue = preorder[pStart]
  let root = new TreeNode(rootValue)
  let rootIndexI = 0
  for (let i = iStart; i < iEnd; i++) {
    if (inorder[i] === rootValue) {
      rootIndexI = i
      break
    }
  }
  let leftNumer = rootIndexI - iStart
  root.left = buildTreeHelper(preorder, pStart + 1, pStart + 1 + leftNumer, inorder, iStart, rootIndexI)
  root.right = buildTreeHelper(preorder, pStart + 1 + leftNumer, pEnd, inorder, rootIndexI + 1, iEnd)
  return root
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end