/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // for(let i = 0; i < haystack.length - needle.length + 1 ; i++){
  //   if(haystack.substring(i, i + needle.length) === needle){
  //     return i
  //   }
  // }
  // return -1

  let l = haystack.length
  let n = needle.length
  if(n === 0) return 0

  let pn = 0
  while(pn < l - n + 1){
    while(pn < l - n + 1 && haystack[pn] !== needle[0]){
      pn++
    }
    let currentL = 0
    while(pn < l && currentL < n && haystack[pn] === needle[currentL] ){
      pn++
      currentL++
    }
    if (currentL === n) return pn - n;
    pn = pn - currentL + 1;
    currentL = 0
  }
  return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = strStr;
// @after-stub-for-debug-end