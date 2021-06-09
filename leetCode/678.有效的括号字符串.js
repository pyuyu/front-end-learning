/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let left = []
  let star = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left.push(i)
    } else if (s[i] === '*') {
      star.push(i)
    } else if (s[i] === ')') {
      if (left.length > 0) {
        left.pop()
      } else if (star.length > 0) {
        star.pop()
      } else {
        return false
      }
    }
  }

  while (left.length > 0) {
    if (star.length === 0) return false
    if (left.pop() > star.pop()) return false
  }

  return true

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = checkValidString;
// @after-stub-for-debug-end