/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      nums[++slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
};
// @lc code=end

