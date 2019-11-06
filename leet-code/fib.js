function fib(n){
    if(n === 0 || n === 1){
        return n
    }else{
        return fib(n-1)+fib(n-2)
    }
}
function fib2(n){
    let res = [0,1]
    for(let i=2; i<=n; i++){
        res.push(res[i-1]+res[i-2])
    }
    return res[n]
}
console.log(fib(4),fib2(4))
console.log(fib(5),fib2(5))
