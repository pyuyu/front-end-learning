/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30204
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (72.70%)
 * Likes:    1272
 * Dislikes: 0
 * Total Accepted:    746.6K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,null,5,null,4]
 * 
 * 输出：[1,3,4]
 * 
 * 解释：
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,3,4,null,null,null,5]
 * 
 * 输出：[1,3,4,5]
 * 
 * 解释：
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,null,3]
 * 
 * 输出：[1,3]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = []
 * 
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,100]
 * -100 <= Node.val <= 100 
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    const res = [];
    function helper(node, depth) {
        if (!node) return res;
        if (depth === res.length) {
            res.push(node.val)
        }
        helper(node.right, depth + 1);
        helper(node.left, depth + 1);
    }
    helper(root, 0);
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,null,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = rightSideView;
// @lcpr-after-debug-end