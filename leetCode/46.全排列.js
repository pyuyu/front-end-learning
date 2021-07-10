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
var permute = function (nums) {
    let res = []
    dfs(nums, [])
    return res
    function dfs(nums, path) {
        if(path.length === nums.length){
            res.push(path.slice())
            return 
        }
        for(let i = 0; i < nums.length; i++){
            if(path.indexOf(nums[i]) < 0){
                path.push(nums[i])
                dfs(nums, path)
                path.pop()
            }
        }
    }
};
// @lc code=end
