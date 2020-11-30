/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function (l1, l2) {
  let temp = 0
  let value = ''
  while (l1 !== null || l2 !== null) {
    let v1 = l1 ? l1.val : 0
    let v2 = l2 ? l2.val : 0
    let res = v1 + v2 + temp
    if (res >= 10) {
      res = res - 10
      temp = 1
    } else {
      temp = 0
    }
    value += res
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  if(temp) value += temp
  let head = node = { val: value[0] }
  for (let i = 1; i < value.length; i++) {
    node.next = {
      val: +value[i]
    }
    node = node.next
  }
  node.next = null
  return head
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end