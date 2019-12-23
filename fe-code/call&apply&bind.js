Function.prototype.applyFn = function (targetObject, argsArray) {
    if(typeof argsArray === 'undefined' || argsArray === null) {
        argsArray = []
    }
 
    if(typeof targetObject === 'undefined' || targetObject === null){
        targetObject = window
    }
 
    targetObject = new Object(targetObject)
 
    const targetFnKey = 'targetFnKey'
    targetObject[targetFnKey] = this
 
    const result = targetObject[targetFnKey](...argsArray)
    delete targetObject[targetFnKey]
    return result
 }