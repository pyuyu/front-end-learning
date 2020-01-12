// 把 M 个同样的苹果放在 N 个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？
// 注意：5、1、1 和 1、5、1 是同一种分法，即顺序无关。
function putApple(m, n){
    if(n > m){
        return putApple(m, m)
    }
    if(m === 0){
        return 1
    }
    if(n === 0){
        return 0
    }
    return putApple(m, n - 1) + putApple(m - n, n)
}

console.log(putApple(7, 3))