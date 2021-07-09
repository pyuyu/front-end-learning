function debounce(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timmer = setTimeout(() => {
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
