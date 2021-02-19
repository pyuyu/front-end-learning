/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  function com(last, divisor) {
    if (last < divisor) return 0;
    let count = 1;
    let test = divisor;
    while ((test + test) <= last) {
      count = count + count; // 商翻倍
      test = test + test; // 当前测试的值也翻倍
    }
    //最后找到一个最大的测试值，然后再从divisor开始重复
    return count + com(last - test, divisor);
  }
  
  let flag = 1;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    flag = -1;
  }
  if (dividend == 0) {
    return 0;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let res = com(dividend, divisor)
  if (flag == -1) {
    return -res;
  }
  return res > 2147483647 ? 2147483647 : res;
};


// @lc code=end

