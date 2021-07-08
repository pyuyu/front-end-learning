function debounce(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timmer = setTimeout(() => {
            fn.apply(context, arguments)
        }, wait)
    }

}


function throttle(fn, wait) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(context, arguments)
            }, wait)
        }
    }
}
