/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = []
  dfs(n, k, 1, [])
  return res

  function dfs(n, k, start, arr = []) {
    if (arr.length === k) return res.push(arr.slice())
    for (let i = start; i <= n - (k - arr.length) + 1; i++) {
      arr.push(i)
      dfs(n, k, i + 1, arr)
      arr.pop()
    }
  }

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end