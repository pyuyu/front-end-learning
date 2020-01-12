 /**
   * 按条件合并相邻项
   * 说明：实现一个方法，可将数组中相邻的项按条件合并
   * 示例：
   *   adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
   *   adjoin([1, 2, 3, 4], item => item < 3); // [[1, 2], 3, 4]
   */

function adjoin(arr, fn){
    return arr.reduce((acc, item) => {
        let isTrue = fn(item)
        let preItem = acc.slice(-1)[0]
        if(isTrue && Array.isArray(preItem)){
            acc.splice(-1, 1, [...preItem, item])
        } else if(isTrue) {
            acc.push([item])
        } else {
            acc.push(item)
        }
        return acc
    }, [])
}
console.log(adjoin([1, 2, 3, 4, 5], item => item !== 3))
console.log(adjoin([1, 2, 3, 4], item => item < 3))
