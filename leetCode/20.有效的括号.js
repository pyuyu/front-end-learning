/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = []
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let i = 0; i < s.length; i++) {
    let top = arr[arr.length - 1]
    if (s[i] === map[top]) {
      arr.pop()
    } else {
      arr.push(s[i])
    }
  }
  return arr.length === 0

};
// @lc code=end

