/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = String(x).split('')
    let res
    if(arr[0] === '-'){
        res = Number(- arr.slice(1).reverse().join(''))
    } else {
        res = Number(arr.reverse().join(''))
    }
    if(res <= Math.pow(-2,31) || res >= Math.pow(2,31) - 1) return 0
    else return res
};
// @lc code=end

