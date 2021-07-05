/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true
  let slow = head
  let fast = head
  let p = null
  let pre = null
  while (fast && fast.next) {
    p = slow
    slow = slow.next
    fast = fast.next.next

    p.next = pre
    pre = p
  }

  if (fast) {  //奇数个节点时跳过中间节点
    slow = slow.next
  }

  while (p) {
    if (p.val !== slow.val) return false
    p = p.next
    slow = slow.next
  }
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end