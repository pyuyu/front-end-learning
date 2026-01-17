function debounce(fn, wait) {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = null
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }

}


function throttle(fn, wait) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, arguments)
            }, wait)
        }
    }
}
