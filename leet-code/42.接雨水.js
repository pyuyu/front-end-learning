/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxHight = Math.max(...height)
    let sum = 0
    for(let i = 1; i <= maxHight; i++){
        let isStart = false; //标记是否开始更新 temp
        let temp_sum = 0;
        for (let j = 0; j < height.length; j++) {
            if (height[j] >= i) {
                isStart = true;
                sum = sum + temp_sum;
                temp_sum = 0;
            }else if (isStart && height[j] < i) {
                temp_sum++;
            }
           
        }
    }
    return sum
};
console.log(trap([2,0,2]))
// @lc code=end

