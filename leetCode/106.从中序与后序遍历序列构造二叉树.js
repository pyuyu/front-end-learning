/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return buildTreeHelper(inorder, 0, inorder.length, postorder, 0, postorder.length)
};

function buildTreeHelper(inorder, iStart, iEnd, postorder, pStart, pEnd) {
  if (pStart === pEnd) {
    return null
  }
  let rootValue = postorder[pEnd - 1]
  let root = new TreeNode(rootValue)
  let iRootIndex = 0
  for (let i = iStart; i < iEnd; i++) {
    if (inorder[i] === rootValue) {
      iRootIndex = i
      break
    }
  }
  let leftNumer = iRootIndex - iStart
  root.left = buildTreeHelper(inorder, iStart, iRootIndex, postorder, pStart, pStart + leftNumer)
  root.right = buildTreeHelper(inorder, iRootIndex + 1, iEnd, postorder, pStart + leftNumer, pEnd - 1)
  return root
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end