/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length < 2) return nums.length
    let maxLength = new Array(nums.length).fill(1)
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                maxLength[i] = Math.max(maxLength[i],maxLength[j] + 1)
            }
        }
    }
    return Math.max(...maxLength)
};
// @lc code=end

