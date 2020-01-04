Array.prototype.reduce = function(func, initialValue) {
    var arr = this
    var base = typeof initialValue === 'undefined' ? arr[0] : initialValue
    var startPoint = typeof initialValue === 'undefined' ? 1 : 0
    arr.slice(startPoint).forEach(function(val, index) {
        base = func(base, val, index + startPoint, arr)
    })
    return base
}


let arr = [1,[2,3],4,5,[6,7,8,[9,10]]]
let flat = (arr) => {
    return arr.reduce((res, item) => {
        if(Array.isArray(item)) {
            return [...res, ...flat(item)]
        }
        return [...res, item]
    }, [])
}
arr = flat(arr)
console.log(arr)
