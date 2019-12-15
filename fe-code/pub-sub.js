let Pubsubz = (function(){
    let clientList = {}
    function listen(key, fn){
        if(!clientList[key]){
            clientList[key] = []
        }
        clientList[key].push(fn)
    }

    function trigger(){
        let key = Array.prototype.shift.call(arguments),
            fns = clientList[key]
            if(fns && fns.length === 0){
                return false
            }
            for(let i = 0, fn; fn = fns[i++]; ){
                fn.apply(this, arguments)
            }
    }

    function remove(key, fn){
        let fns = clientList[key]
        if(!fns){ // 如果 key 对应的消息没有被人订阅，则直接返回
            return false
        }
        if(!fn){ // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
            fns && (fns.length = 0)
        }else{
            for(let l = fns.length - 1; l >= 0; l--){
                let _fn = fns[l]
                if(_fn === fn){
                    fns.splice(l, 1) // 删除订阅者的回调函数
                }
            }
        }
    }

    return {
        listen,
        trigger,
        remove
    }
})()

Pubsubz.listen( 'squareMeter88', function( price ){ // 小红订阅消息
    console.log( '价格= ' + price ); // 输出：'价格=2000000'
});
Pubsubz.trigger( 'squareMeter88', 2000000 ); 