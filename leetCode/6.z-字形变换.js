/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
   if(numRows < 2){return s}
   let res = new Array(numRows).fill('')
   let i = 0, flag = -1
   for(let c of s){
      res[i] += c
      if(i === 0 || i === numRows - 1){
         flag = -flag
      }
      i += flag
   }
   return res.join('')
};

// @lc code=end
