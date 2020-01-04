/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    nums.sort((a, b) => a - b)
    //判断数组内元素是否都为正数或负数，直接返回
    if(nums[0] > 0 || nums[nums.length - 1] < 0) return result
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] == nums[i-1]) continue;
        let kNum = nums[i]
        let l = i + 1, r = nums.length - 1
        while(l < r){
            if(nums[l] + nums[r] === -kNum){
                result.push([kNum, nums[l], nums[r]])
                while(l < r && nums[l] === nums[l + 1]){
                    l++
                }
                while(l < r && nums[r] === nums[r - 1]){
                    r--
                }
                l++
                r--
            }else if(nums[l] + nums[r] > -kNum){
                r--
            }else {
                l++
            }
        }
    }
    return result
};
// @lc code=end

