/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0, r = -1;
  let sum = 0
  let res = nums.length + 1
  while (l < nums.length) {
    if (sum < target && r < nums.length - 1) {
      sum += nums[++r]
    } else {
      sum -= nums[l++]
    }
    if (sum >= target) {
      res = Math.min(res, r - l + 1)
    }
    
  }
  return res === nums.length + 1 ? 0 : res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end