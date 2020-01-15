
let arr = [9, 13, 25, 16, 7, 92, 28]
// console.log(bubbleSort(arr))
// console.log(selectionSort(arr))
// console.log(insertSort(arr))
// console.log(shellSort(arr))
// console.log(mergeSort_main(arr))
console.log(quickSort_main(arr))
// console.log(heapSort_main(arr))


// 冒泡排序
function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                const temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

// 选择排序
function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}

// 插入排序
function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        for(let j = i - 1; j >= 0; j--){
            if(arr[j] > current){
                arr[j+1] = arr[j]
            } else {
                arr[j+1] = current
                break
            }
        }
        return arr
    }
}

// 希尔排序
function shellSort(arr){
    for(let gap =  Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)){
        for (let i = gap; i < arr.length; i++) {
            let j = i
            let current = arr[i]
            while (j - gap >= 0 && current < arr[j - gap]) {
                 arr[j] = arr[j - gap]
                 j = j - gap
            }
            arr[j] = current
        }
    }
    return arr
}

// 归并排序
function mergeSort_main(arr) {
    mergeSort(arr, 0, arr.length - 1);
    return arr;

    function mergeSort(arr, left, right) {
        if (left === right) return;
        let mid = parseInt(left + Math.floor((right - left)/2));
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, right, mid)
    }
    function merge(arr, left, right, mid){
        let temp = [];
        let i = 0;
        let p1 = left;
        let p2 = mid + 1;
        while (p1 <= mid && p2 <= right) {
            temp[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
        }
        while (p1 <= mid) {
            temp[i++] = arr[p1++];
        }
        while (p2 <= right) {
            temp[i++] = arr[p2++];
        }
        for (let i = 0; i < temp.length; i++) {
            arr[left + i] = temp[i];
        }
        return arr;
    }
}

function merge1(leftArr, rightArr){  
    var result = [];  
    while (leftArr.length > 0 && rightArr.length > 0){  
      if (leftArr[0] < rightArr[0])  
        result.push(leftArr.shift());   
      else   
        result.push(rightArr.shift());  
    }   
    return result.concat(leftArr).concat(rightArr); 
}  
function mergeSort1(array){  
    if (array.length == 1) return array;  
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);  
    return merge1(mergeSort1(left), mergeSort1(right));
}


// 快排
function quickSort_main(arr){
    quickSort(arr, 0, arr.length - 1)
    return arr

    function quickSort(arr, left, right){
        if(left < right){
            let position = partition(arr, left, right)
            quickSort(arr, left, position - 1)
            quickSort(arr, position + 1, right) 
        }
    }

    function partition(arr, left, right){
        let pivot  = arr[left]
        while(left < right){
            while(left < right && arr[right] >= pivot){
                right--
            }
            arr[left] = arr[right]
            while(left < right && arr[left] <= pivot){
                left++
            }
            arr[right] = arr[left]
        }
        arr[left] = pivot
        return left
    }
}

// 堆排序
function heapSort_main(arr){
    let len  = arr.length
    return heapSort(arr)

    function heapSort(arr){
        buildHeap(arr)
        for(let i = arr.length - 1; i > 0; i--){
            swap(arr, 0, i)
            len--
            heapify(arr, 0)
        }
        return arr
    }

    function buildHeap(arr){
        for(let i = Math.floor(arr.length / 2); i >= 0; i--){
            heapify(arr, i)
        }
    }

    function heapify(arr, i){
        let left = 2 * i + 1
        let right = 2 * i + 2
        let max = i
        if(left < len && arr[left] > arr[max]){
            max = left
        }
        if(right < len && arr[right] > arr[max]){
            max = right
        }
        if(max != i){
            swap(arr, i, max)
            heapify(arr, max)
        }
    }
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}