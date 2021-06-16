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
  let minMax = nums[0]
  let maxMax = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    let preMax = maxMax
    maxMax = Math.max(minMax * num, maxMax * num, num)
    minMax = Math.min(minMax * num, preMax * num, num)
    max = Math.max(max, maxMax)
  }
  return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end