/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30204
 *
 * [2] 两数相加
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = new ListNode(0);
    let sumNode = sum;
    let hasCarry = 0;
    while(l1 || l2 || hasCarry) {
        const value1 = l1 ? l1.val : 0;
        const value2 = l2 ? l2.val : 0;
        const res = value1 + value2 + hasCarry;
        const num = res % 10;
        sum.next = new ListNode(num);
        hasCarry = res >= 10 ? 1: 0;
        sum = sum.next
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return sumNode.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// @lc code=end



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = addTwoNumbers;
// @lcpr-after-debug-end