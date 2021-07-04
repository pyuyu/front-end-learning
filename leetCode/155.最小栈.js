/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.minStack.length === 0 || val <= this.minStack.slice(-1)[0]) {
    this.minStack.push(val)
  }
  this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let val = this.stack.pop()
  if (val === this.minStack.slice(-1)[0]) {
    this.minStack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.slice(-1)[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.slice(-1)[0]
};


// let ms = new MinStack()
// ms.push(0)
// ms.push(1)
// ms.push(0)
// ms.getMin()
// ms.pop()
// ms.getMin()

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = MinStack;
// @after-stub-for-debug-end