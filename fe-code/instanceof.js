function myInstanceof(L, R){
    if(typeof L !== 'object'){
        return false
    }
    while(true){
        if(L === null){
            return false
        }
        if(L.__proto__ === R.prototype){
            return true
        }
        L = L.__proto__
    }
}

let a = new Array()
console.log(myInstanceof(a, Array))
console.log(myInstanceof(a, Object))
