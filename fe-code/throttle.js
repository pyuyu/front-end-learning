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