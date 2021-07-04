/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0; r = numbers.length - 1
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1]
    } else if (numbers[l] + numbers[r] < target) {
      l++
    } else {
      r--
    }
  }
};
// @lc code=end

