/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  if (n === 0) {
    return res
  }
  dfs('', n, n, res)
  return res

  function dfs(cur, left, right, res) {
    if (!left && !right) {
      res.push(cur)
      return
    }
    if (left > right) {
      return
    }
    if (left > 0) {
      dfs(cur + '(', left - 1, right, res)
    }
    if (right > 0) {
      dfs(cur + ')', left, right - 1, res)
    }
  }
};
// @lc code=end

