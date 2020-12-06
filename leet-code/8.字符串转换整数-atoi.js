/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const num = parseInt(s, 10)
  if (isNaN(num)) {
    return 0
  } else if (num < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  } else if (num >= Math.pow(2, 31)) {
    return (Math.pow(2, 31) - 1)
  }
  return num

};
// @lc code=end

