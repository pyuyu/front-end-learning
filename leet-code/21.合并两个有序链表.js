/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function (l1, l2) {
  let head = l = new ListNode(-1)
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l.next = l1
      l1 = l1.next
    } else {
      l.next = l2
      l2 = l2.next
    }
    l = l.next
  }
  while (l1) {
    l.next = l1
    l1 = l1.next
    l = l.next
  }
  while (l2) {
    l.next = l2
    l2 = l2.next
    l = l.next
  }
  return head.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end