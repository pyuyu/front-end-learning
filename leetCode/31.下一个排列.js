/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let len = nums.length
  let i = len - 2
  let j = k = len - 1
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }

  if (i >= 0) {
    while (i >= 0 && nums[i] >= nums[k]) {
      k--
    }
    let temp = nums[i]
    nums[i] = nums[k]
    nums[k] = temp
  }

  for (let i = j, k = nums.length - 1; i < k; i++, k--) {
    let temp = nums[i];
    nums[i] = nums[k];
    nums[k] = temp;
  }

  return nums

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextPermutation;
// @after-stub-for-debug-end