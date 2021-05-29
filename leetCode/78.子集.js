/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  dfs(0, nums, res, [])
  function dfs(i, nums, res, temp) {
    res.push(temp.slice())
    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j])
      dfs(j + 1, nums, res, temp)
      temp.pop()
    }
  }
  return res

};
// @lc code=end

