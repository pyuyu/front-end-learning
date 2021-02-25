/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let length = nums.length
  if (nums[length - 1] < target) return length
  let l = 0, r = length - 1
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] === target) {
      return mid
    } else {
      r = mid
    }
  }
  return l
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end