/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummyHead = new ListNode(-1)
  dummyHead.next = head
  let g = dummyHead;
  let p = dummyHead.next;

  for (let i = 0; i < left - 1; i++) {
    g = g.next
    p = p.next
  }
  for (let i = left; i < right; i++) {
    let remove = p.next
    p.next = p.next.next

    remove.next = g.next
    g.next = remove

  }
  return dummyHead.next;
};
// @lc code=end

