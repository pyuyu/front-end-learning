/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  let k = lists.length
  while (k > 1) {
    let idx = 0
    for (let i = 0; i < k; i += 2) {
      if (i == k - 1) {
        lists[idx++] = lists[i]
      } else {
        lists[idx++] = mergeTwoLists(lists[i], lists[i + 1])
      }
    }
    k = idx
  }
  return lists[0]
};

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
  l.next = l1 ? l1 : l2
  return head.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end