/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  if (head === null || head.next === null) return head
  let middle = findMiddle(head)
  let rightHead = middle.next
  middle.next = null

  let left = sortList(head)
  let right = sortList(rightHead)

  return merge(left, right)

  function findMiddle(head) {
    if (head == null || head.next == null) {
      return head;
    }
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }

  function merge(left, right) {
    let sentry = new ListNode(-1)
    let curr = sentry
    while (left && right) {
      if (left.val < right.val) {
        curr.next = left
        left = left.next
      } else {
        curr.next = right
        right = right.next
      }
      curr = curr.next
    }
    curr.next = left !== null ? left : right
    return sentry.next
  }
};
// @lc code=end

