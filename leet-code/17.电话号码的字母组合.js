/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['x', 'w', 'y', 'z'],
  }
  let res = []
  backtrack('', 0)
  return res.filter(i => i)

  function backtrack(conb, i) {
    if (i > digits.length - 1) {
      return res.push(conb)
    }
    for (let letter of digitsMap[digits[i]]) {
      backtrack(conb + letter, i + 1)
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end