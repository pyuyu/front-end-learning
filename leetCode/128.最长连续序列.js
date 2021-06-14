/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums)
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (!set.has(num - 1)) {
      let count = 0
      while (set.has(num)) {
        count++
        num++
      }
      max = Math.max(max, count)
    }
  }
  return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end