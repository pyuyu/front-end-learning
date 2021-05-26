/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  candidates = candidates.sort((a, b) => a - b)
  console.log(candidates)
  dfs(candidates, target, res, 0, [])
  return res

  function dfs(candidates, target, res, start, tempRes) {
    // if (target < 0) return
    if (target === 0) {
      res.push(tempRes.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (target < candidates[i]) break

      tempRes.push(candidates[i])
      dfs(candidates, target - candidates[i], res, i, tempRes)
      tempRes.pop()
    }

  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end