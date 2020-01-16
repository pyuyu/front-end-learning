function debounce(fn, wait, immediate){
    let timer = null
    return function(){
        let context = this
        if(timer){
            clearTimeout(timer)
        }
        timmer = setTimeout(()=> {
            fn.apply(context,arguments)
        }, wait)
    }
    
}


function throttle(fn, wait, immediate){
    let timer = null
    return function(){
        let context = this
        if(!timer){
            timer = setTimeout(()=> {
                timer = null
                fn.apply(context,arguments)
            }, wait)
        }
    }

}

