function debounce(fn, wait){
    let timeout = null
    return function (){
        let context = this
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply.apply(context, arguments), wait)
    }
}

function throttle(fn, wait){
    let timeout = null
    return function(){
        context = this
        if(!timeout){
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(context,arguments)
            }, wait)
        }
    }
}

