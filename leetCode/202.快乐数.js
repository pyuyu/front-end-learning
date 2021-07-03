/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function squareSum(n) {
    let sum = 0
    while (n) {
      let digit = n % 10
      sum += digit * digit
      n = parseInt(n / 10)
    }
    return sum
  }

  let slow = n
  let fast = squareSum(n)
  while (slow !== fast) {
    slow = squareSum(slow)
    fast = squareSum(squareSum(fast))
  }
  return slow == 1
};
// @lc code=end

