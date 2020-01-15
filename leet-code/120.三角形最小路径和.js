/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length
    let res = {}
    
    function minSum(i,j){
        let key = `${i},${j}`
        if(res[key]){
            return res[key]
        }
        if(i === n - 1){
            return res[key] = triangle[i][j]
        }
        let res1 = minSum(i+1,j)
        let res2 = minSum(i+1,j+1)
        return res[key] = (Math.min(res1,res2) + triangle[i][j])
    }
    
    return minSum(0,0)
};
// @lc code=end

