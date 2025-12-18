/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30204
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (40.14%)
 * Likes:    7902
 * Dislikes: 0
 * Total Accepted:    2.2M
 * Total Submissions: 5.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length === 0) return '';
    const sLen = s.length;
    let start = 0;
    let left = 0;
    let right = 0;
    let len = 1;
    let maxLen = 0;
    for (let i = 0; i < sLen; i++) {
        left = i - 1;
        right = i + 1;
        len = 1;
        while(left >= 0 && s[left] === s[i]) {
            left --;
            len ++;
        }
        while(right <= sLen - 1 && s[right] === s[i]) {
            right ++;
            len ++;
        }
        while(left >= 0 && right <= sLen - 1 && s[left] === s[right]) {
            left --;
            right ++;
            len = len + 2;
        }
        if (len > maxLen) {
            maxLen = len;
            start = left;
        }
    }
    return s.slice(start + 1, start + maxLen + 1)
};
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = longestPalindrome;
// @lcpr-after-debug-end