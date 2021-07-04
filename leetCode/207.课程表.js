/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let inDegree = Array(numCourses).fill(0) // 入度表
  let map = {} // 邻接表
  for(let i = 0 ; i < prerequisites.length; i++){
    let prerequisit = prerequisites[i]
    inDegree[prerequisit[0]]++
    if(map[prerequisit[1]] && map[prerequisit[1]].length){
      map[prerequisit[1]].push(prerequisit[0])
    } else {
      map[prerequisit[1]] = [prerequisit[0]]
    }
  }
  const queue = []
  for(let i = 0; i < inDegree.length; i++){
    if(inDegree[i] === 0){
      queue.push(i)
    }
  }
  let count = 0
  while(queue.length){
    let selected = queue.shift()
    count++
    const courses = map[selected]
    if(courses && courses.length){
      for(let i = 0; i < courses.length; i++){
        inDegree[courses[i]]--
        if (inDegree[courses[i]] == 0) {
          queue.push(courses[i])
        }
      }
    }
  }
  return count ===  numCourses

};
// @lc code=end

