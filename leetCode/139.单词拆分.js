/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  let memo = []
  let words = new Set(wordDict)

  function canBreak(start) {
    if (start === s.length) return true
    if (memo[start] !== undefined) return memo[start]
    for (let i = start + 1; i <= s.length; i++) {
      let str = s.slice(start, i)
      if (words.has(str) && canBreak(i)) {
        memo[i] = true
        return true
      }
    }
    memo[start] = false
    return false
  }
  return canBreak(0)

};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = wordBreak;
// @after-stub-for-debug-end