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
  // let memo = []
  // let words = new Set(wordDict)

  // function canBreak(start) {
  //   if (start === s.length) {
  //     return true
  //   }
  //   if (memo[start] !== undefined) return memo[start]
  //   for (let i = start + 1; i <= s.length; i++) {
  //     let str = s.slice(start, i)
  //     if (words.has(str) && canBreak(i)) {
  //       memo[i] = true
  //       return true
  //     }
  //   }
  //   memo[start] = false
  //   return false
  // }
  // return canBreak(0)

  const wordSet = new Set(wordDict);
  const len = s.length;
  const visited = new Array(len);

  const queue = [];
  queue.push(0);

  while (queue.length) {
    const start = queue.shift();  // 考察出列的指针
    if (visited[start]) {
      continue; // 是访问过的，跳过
    }
    visited[start] = true;        // 未访问过的，记录一下

    for (let i = start + 1; i <= len; i++) { // 用指针i去划分两部分
      const prefix = s.slice(start, i);      // 前缀部分
      if (wordSet.has(prefix)) {  // 前缀部分是单词
        if (i < len) {            // i还没越界，还能继续划分，让它入列，作为下一层待考察的节点
          queue.push(i);
        } else {  // i==len，指针越界，说明s串一路被切出单词，现在没有剩余子串，不用划分，返回true
          return true;
        }
      } // 前缀部分不是单词，i指针不入列，继续下轮迭代，切出下一个前缀部分，再试
    }
  }
  return false; // BFS完所有节点（考察了所有划分的可能）都没返回true，则返回false


};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = wordBreak;
// @after-stub-for-debug-end