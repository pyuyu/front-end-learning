/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length
  if (n === 0) return -1
  let l = 0, r = n - 1
  while (l <= r) {
    let mid = parseInt((r + l) / 2)
    if (nums[mid] === target) return mid
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end