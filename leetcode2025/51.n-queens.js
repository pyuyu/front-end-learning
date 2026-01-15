/*
 * @lc app=leetcode.cn id=51 lang=javascript
 * @lcpr version=30204
 *
 * [51] N 皇后
 *
 * https://leetcode.cn/problems/n-queens/description/
 *
 * algorithms
 * Hard (75.52%)
 * Likes:    2405
 * Dislikes: 0
 * Total Accepted:    627.9K
 * Total Submissions: 831.3K
 * Testcase Example:  '4'
 *
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 * 
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 9
 * 
 * 
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const col = [];
    const diag1 = [];
    const diag2 = [];
    const onPath = [];
    function dfs(r) {
        if(r === n) {
            board = col.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - 1 - c));
            res.push(board);
            return;
        }
        // 当前要填入的列号
        for(let c = 0; c < n; c ++) {
            if(!onPath[c] && !diag1[r + c] && !diag2[r - c]) {
                onPath[c] = true;
                diag1[r + c] = true;
                diag2[r - c] = true;
                col[r] = c;
                dfs(r + 1);
                onPath[c] = false;
                diag1[r + c] = false;
                diag2[r - c] = false;
            }
        }
    }    
    dfs(0);
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

