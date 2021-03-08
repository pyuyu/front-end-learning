/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = []
  let columns = Array.from(Array(9), () => [])
  let boxs = Array.from(Array(9), () => [])
  for (let i = 0; i < 9; i++) {
    row = []
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num !== '.') {
        if (row.indexOf(num) >= 0) {
          return false
        }
        if (columns[j].indexOf(num) >= 0) {
          return false
        }
        let boxIndex = Math.floor(i / 3) * 3 +  Math.floor(j / 3);
        if (boxs[boxIndex].indexOf(num) >= 0) {
          return false
        }
        row.push(num)
        columns[j].push(num)
        boxs[boxIndex].push(num)
      }

    }
  }
  return true
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValidSudoku;
// @after-stub-for-debug-end