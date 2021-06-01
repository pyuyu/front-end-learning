/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0
  let p1 = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    nums[i] = 2
    if (num < 2) {
      nums[p1++] = 1
    }
    if (num < 1) {
      nums[p0++] = 0
    }
  }
};
// @lc code=end

