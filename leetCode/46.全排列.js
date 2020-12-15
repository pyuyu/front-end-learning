/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    dfs(nums, [])
    return res
    function dfs(nums, path){
        if(nums.length === path.length){
            res.push(path.slice(0))
        }
        for(let i = 0; i < nums.length; i++){
            if(path.includes(nums[i])) continue
            path.push(nums[i])
            dfs(nums, path)
            path.pop(nums[i])
        }
    }
};
// @lc code=end

