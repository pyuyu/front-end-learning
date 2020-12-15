/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let preNum = getVal(s[0])
  let sum = 0
  for (let i = 1; i < s.length; i++) {
    let num = getVal(s[i])
    if (num > preNum) {
      sum -= preNum
    } else {
      sum += preNum
    }
    preNum = num
  }
  sum += preNum
  return sum


  function getVal(ch) {
    switch (ch) {
      case 'I':
        return 1
      case 'V':
        return 5
      case 'X':
        return 10
      case 'L':
        return 50
      case 'C':
        return 100
      case 'D':
        return 500
      case 'M':
        return 1000
      default:
        return 0
    }
  }

};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end