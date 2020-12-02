/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    if (len < 2) {
        return s
    }
    let maxLen = 1
    let res = s.substring(0, 1)
    for (let i = 0; i < len - 1; i++) {
        let oddStr = centerSpread(s, i, i)
        let evenStr = centerSpread(s, i, i + 1)
        let maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr
        if (maxLenStr.length > maxLen) {
            maxLen = maxLenStr.length
            res = maxLenStr
        }
    }
    return res
};

function centerSpread(s, left, right) {
    let len = s.length
    while (left >= 0 && right < len) {
        if (s[left] === s[right]) {
            left--
            right++
        } else {
            break
        }
    }
    return s.substring(left + 1, right)
}
// @lc code=end

