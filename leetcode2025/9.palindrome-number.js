/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30204
 *
 * [9] 回文数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = x % 10 + revertedNumber * 10;
        x = Math.floor(x / 10)
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
// @lc code=end



/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end