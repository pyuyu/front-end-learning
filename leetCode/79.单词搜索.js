/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length
  let n = board[0].length
  let visited = new Array(m).fill(0).map(i => Array(n).fill(0))
  const DIRECTIONS = [[-1, 0], [0, -1], [0, 1], [1, 0]]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false

  function dfs(i, j, k) {
    let ch = word.charAt(k)
    if (k === word.length - 1) return board[i][j] === ch
    if (board[i][j] === ch) {
      visited[i][j] = 1
      for (let d = 0; d < DIRECTIONS.length; d++) {
        let x = i + DIRECTIONS[d][0]
        let y = j + DIRECTIONS[d][1]
        if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
          if (dfs(x, y, k + 1)) {
            return true;
          }
        }
      }
      visited[i][j] = 0
    }
    return false
  }

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = exist;
// @after-stub-for-debug-end