/*
 * @lc app=leetcode.cn id=78 lang=javascript
 * @lcpr version=30204
 *
 * [78] 子集
 *
 * https://leetcode.cn/problems/subsets/description/
 *
 * algorithms
 * Medium (82.25%)
 * Likes:    2578
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * nums 中的所有元素 互不相同
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    const path = [];
    const n = nums.length;

    function dfs(i) {
        if (i === n) {
            return res.push(path.slice())
        }
        // 不选nums[i]
        dfs(i + 1);

        // 选num[i]
        path.push(nums[i])
        dfs(i + 1);
        path.pop();
    }

    function dfs2(i) {
        res.push(path.slice());
        for (let j = i; j < n; j++) {
            path.push(nums[j])
            dfs2(j + 1);
            path.pop();
        }

    }
    dfs2(0);
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

