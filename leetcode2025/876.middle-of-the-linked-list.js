/*
 * @lc app=leetcode.cn id=876 lang=javascript
 * @lcpr version=30204
 *
 * [876] 链表的中间结点
 *
 * https://leetcode.cn/problems/middle-of-the-linked-list/description/
 *
 * algorithms
 * Easy (72.50%)
 * Likes:    1102
 * Dislikes: 0
 * Total Accepted:    542.4K
 * Total Submissions: 747.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
 * 
 * 如果有两个中间结点，则返回第二个中间结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[3,4,5]
 * 解释：链表只有一个中间结点，值为 3 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2,3,4,5,6]
 * 输出：[4,5,6]
 * 解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表的结点数范围是 [1, 100]
 * 1 <= Node.val <= 100
 * 
 * 
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

 */

