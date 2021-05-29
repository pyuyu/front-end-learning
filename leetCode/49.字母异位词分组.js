/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for(let i = 0; i < strs.length; i++){
    let count = Array(26).fill(0)
    let s = strs[i]
    for(let j = 0; j < strs[i].length; j++){
      let c = s[j]
      count[c.charCodeAt() - 'a'.charCodeAt()]++
    }
    map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map)

};
// @lc code=end

