/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0]
  let dpMax = nums[0]
  let dpMin = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let preDpMax = dpMax
    dpMax = Math.max(nums[i] * dpMax, nums[i] * dpMin, nums[i])
    dpMin = Math.min(nums[i] * preDpMax, nums[i] * dpMin, nums[i])
    max = Math.max(dpMax, max)
  }
  return max
};
// @lc code=end

