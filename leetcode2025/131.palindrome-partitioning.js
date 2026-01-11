/*
 * @lc app=leetcode.cn id=131 lang=javascript
 * @lcpr version=30204
 *
 * [131] 分割回文串
 *
 * https://leetcode.cn/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (75.35%)
 * Likes:    2139
 * Dislikes: 0
 * Total Accepted:    702.4K
 * Total Submissions: 932.3K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 16
 * s 仅由小写英文字母组成
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = [];
    const path = [];
    const n = s.length;
    function dfs(i) {
        if (i === n) {
            res.push(path.slice());
        }
        for (let j = i; j < n; j++) {
            if (isPalindrome(s, i, j)) {
                path.push(s.slice(i, j + 1));
                dfs(j + 1)
                path.pop()
            }
        }
    }
    dfs(0);
    return res;
};

var isPalindrome = function (s, left, right) {
    while (left < right) {
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false;
        }
    }
    return true;
}

// @lc code=end



/*
// @lcpr case=start
// "aab"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

 */

