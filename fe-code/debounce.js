function debounce(fn, wait){
    let timeout = null
    return function (){
        let context = this
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply.apply(context, arguments), wait)
    }
}

