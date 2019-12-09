
let arr = [9, 13, 25, 16, 7, 92, 28]
console.log(bubbleSort(arr))
console.log(selectionSort(arr))
console.log(insertSort(arr))
console.log(shellSort(arr))

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