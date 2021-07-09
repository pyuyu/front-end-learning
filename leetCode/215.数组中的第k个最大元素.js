/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    let len = nums.length;
    let left = 0;
    let right = len - 1;

    // 转换一下，第 k 大元素的索引是 len - k
    let target = len - k;

    while (true) {
        let index = partition2(nums, left, right);
        if (index == target) {
            return nums[index];
        } else if (index < target) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
};

function partition(arr, left, right) {
    let pivot = arr[left]
    let j = left
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < pivot) {
            j++
            swap(arr, i, j)
        }
    }
    swap(arr, j, left)
    return j
}

function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function partition2(arr, left, right) {
    let pivot = arr[left]
    while (left < right) {
        while (left < right && arr[right] >= pivot) {
            right--
        }
        arr[left] = arr[right]
        while (left < right && arr[left] <= pivot) {
            left++
        }
        arr[right] = arr[left]
    }
    arr[left] = pivot
    return left

}
// @lc code=end

