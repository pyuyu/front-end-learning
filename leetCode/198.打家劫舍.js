/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let dp = []
  dp[0] = 0
  dp[1] = nums[0]
  for(let i = 2; i <= nums.length; i++){
    dp[i] = Math.max(dp[i - 1], nums[i - 1] + dp[i - 2])
  }
  return dp[nums.length]
};
// @lc code=end

