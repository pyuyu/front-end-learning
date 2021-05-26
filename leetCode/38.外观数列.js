/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let pre = '1'
  for (let i = 1; i < n; i++) {
    pre = pre.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return pre

};
// @lc code=end

