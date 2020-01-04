/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 // 投票算法
var majorityElement = function(nums) {
    let count = 0
    let res = nums[0]
    for(let i = 0; i < nums.length; i++){
        if (count === 0){
            res = nums[i]
        }
        if (nums[i] === res) {
            count ++
        } else {
            count --
        }
    }
    return res
};
// @lc code=end

