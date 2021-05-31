Array.prototype.reduce = function (func, initialValue) {
    var arr = this
    var base = typeof initialValue === 'undefined' ? arr[0] : initialValue
    var startPoint = typeof initialValue === 'undefined' ? 1 : 0
    arr.slice(startPoint).forEach(function (val, index) {
        base = func(base, val, index + startPoint, arr)
    })
    return base
}

Array.prototype.myReduce = function (callback, initialVal) {
    const arr = this
    let base = initialVal == null ? 0 : initialVal
    let startPoint = initialVal == null ? 0 : 1
    for (let i = 0; i < arr.length; i++) {
        base = callback(base, arr[i], i + startPoint, arr)
    }
    return base
}

let a = [1, 2, 3, 4]
let sum = a.myReduce((res, currValue, index) => { console.log(index); return res += currValue })


let arr = [1, [2, 3], 4, 5, [6, 7, 8, [9, 10]]]
let flat = (arr) => {
    return arr.reduce((res, item) => {
        if (Array.isArray(item)) {
            return [...res, ...flat(item)]
        }
        return [...res, item]
    }, [])
}
arr = flat(arr)
console.log(arr)
