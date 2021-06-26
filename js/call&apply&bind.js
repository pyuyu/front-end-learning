Function.prototype.applyFn = function (targetObject, argsArray) {
    if (typeof argsArray === 'undefined' || argsArray === null) {
        argsArray = []
    }

    if (typeof targetObject === 'undefined' || targetObject === null) {
        targetObject = window
    }

    targetObject = new Object(targetObject)

    const targetFnKey = 'targetFnKey'
    targetObject[targetFnKey] = this

    const result = targetObject[targetFnKey](...argsArray)
    delete targetObject[targetFnKey]
    return result
}


Function.prototype.myBind = function (target, ...rest) {
    let _this = this
    let bound = function () {
        let args = [...rest, ...arguments]
        if (new.target !== undefined) { // new调用
            let res = _this.apply(this, args) // this指向构造函数
            return res instanceof Object ? res : this
        } else {
            return _this.apply(target, args)
        }
    }
    if (this.prototype) {
        bound.prototype = Object.create(this.prototype);
        bound.prototype.constructor = this;
    }
    return bound
}

let o = {
    name: 'Bill'
}

function fn(...parm) {
    console.log(this.name, ...parm)
}

let ofn = fn.myBind(o, 'ddddd')
ofn('eeeee')


function test() {
    // console.log(new.target)
    console.log(this instanceof test)
}

test()
new test()
