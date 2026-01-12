/*
 * @lc app=leetcode.cn id=77 lang=javascript
 * @lcpr version=30204
 *
 * [77] 组合
 *
 * https://leetcode.cn/problems/combinations/description/
 *
 * algorithms
 * Medium (77.74%)
 * Likes:    1815
 * Dislikes: 0
 * Total Accepted:    972.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 
 * 你可以按 任何顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 4, k = 2
 * 输出：
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 示例 2：
 * 
 * 输入：n = 1, k = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 20
 * 1 <= k <= n
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const path = [];

    function dfs(i) {
        // 还需要填充的数字
        const d = k - path.length;
        if (i < d) return;
        if (path.length === k) {
            res.push(path.slice());
            return;
        }
        for (let j = i; j > 0; j--) {
            path.push(j);
            dfs(j - 1);
            path.pop()
        }
    }
    dfs(n)
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */

