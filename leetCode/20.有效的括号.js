/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        "]": "[",
        ")": "(",
        "}": "{",
    }
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(Object.values(map).indexOf(s[i]) >= 0){
            stack.push(s[i])
        } else {
            let temp = stack.pop()
            if(map[s[i]] !== temp) {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid("()"))
// @lc code=end

