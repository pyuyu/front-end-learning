/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let maxl = 0
  let tmp = ''
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i)
    let index = tmp.indexOf(ch)
    if (index === -1) {
      tmp += ch
      maxl = Math.max(maxl, tmp.length)
    } else {
      tmp = tmp.substr(index + 1) + ch
    }
  }
  return maxl
};
// @lc code=end

