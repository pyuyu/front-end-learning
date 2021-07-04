/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let p = dummy
  while (p.next && p.next.next) {
    let n1 = p.next
    let n2 = n1.next
    let next = n2.next

    n2.next = n1
    n1.next = next
    p.next = n2

    p = n1

  }
  return dummy.next
};
// @lc code=end

