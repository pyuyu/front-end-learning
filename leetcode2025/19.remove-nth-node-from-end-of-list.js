/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30204
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (50.47%)
 * Likes:    3229
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 3.8M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 方法1： 先遍历一遍数组， 得到数组长度len， 然后删除第len - n + 1 个元素
// 方法2： 利用栈， 先把所有节点入栈， 然后出栈n个元素
// 方法3： 双指针法 https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/2004057/ru-he-shan-chu-jie-dian-liu-fen-zhong-ga-xpfs/
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = dummy;
    while(n--) {
        right = right.next; // 右指针先走n步
    }
    while(right.next) { // 左右指针一起移动， 当右指针到最后一个结点时， 左指针则是倒数n个节点， 删除i个节点需要知道i - 1个节点， 所以这里右指针移动到倒数第二个节点
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return dummy.next;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */


// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end