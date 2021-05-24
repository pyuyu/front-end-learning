/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findFirst(nums, target) {
    let l = 0, r = nums.length - 1
    while (l < r) {
      let mid = parseInt(l + (r - l) / 2)
      if (nums[mid] < target) {
        l = mid + 1
      } else if (nums[mid] === target) {
        r = mid
      } else {
        r = mid - 1
      }
    }
    if (nums[l] == target) {
      return l;
    }
    return -1;
  }

  function findLast(nums, target) {
    let l = 0, r = nums.length - 1
    while (l < r) {
      let mid = parseInt(l + (r - l + 1) / 2)
      if (nums[mid] > target) {
        r = mid - 1
      } else if (nums[mid] === target) {
        l = mid
      } else {
        l = mid + 1
      }
    }
    return r
  }

  if (nums.length === 0) return [-1, -1]
  let first = findFirst(nums, target)
  if (first === -1) return [-1, -1]
  let last = findLast(nums, target)
  return [first, last]

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end