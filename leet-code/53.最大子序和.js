/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_sum = -Number.MAX_VALUE
    let curr_sum = 0
    for(let i = 0; i < nums.length; i++){
        if(curr_sum < 0){
            curr_sum = nums[i]
        }else{
            curr_sum += nums[i]
        }
        if(curr_sum > max_sum){
            max_sum = curr_sum
        }
    }
    return max_sum
};
// @lc code=end

