/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0
    let R = nums.length - 1
    while(L <= R){
        let mid = L + Math.floor((R - L)/2)
        if (target === nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            L = mid + 1
        } else {
            R = mid - 1
        }
    } 
    return -1 
};
// @lc code=end

