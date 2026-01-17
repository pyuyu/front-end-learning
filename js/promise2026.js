
// 参考https://gemini.google.com/share/447611527f95
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'
class MyPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCbs = [];
        this.onRejectedCbs = [];

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.value = value;
                this.state = FULFILLED;
                this.onFulfilledCbs.forEach(cb => cb(this.value));
            }
        }

        const reject = (reason) => {
            if (this.state === PENDING) {
                this.reason = reason;
                this.state = REJECTED;
                this.onRejectedCbs.forEach(cb => cb(this.reason));
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason;

        const p2 = new MyPromise((resolve, reject) => {
            const handleCallback = (callback, data) => {
                queueMicrotask(() => {
                    try {
                        const x = callback(data);
                        // resolve(x);
                        resolvePromise(p2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            };
            if (this.state === FULFILLED) {
                handleCallback(onFulfilled, this.value)
            }
            if (this.state === REJECTED) {
                handleCallback(onRejected, this.reason)
            }
            if (this.state === PENDING) {
                this.onFulfilledCbs.push(() => {
                    handleCallback(onFulfilled, this.value)
                });
                this.onRejectedCbs.push(() => {
                    handleCallback(onRejected, this.value)

                });
            }
        })
        return p2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'))
    }
    if (typeof x?.then === 'function') {
        try {
            x.then((y) => {
                resolvePromise(promise2, y, resolve, reject)
            }, (r) => {
                reject(r)
            })
        } catch (error) {
            reject(error);
        }
    }
    return resolve(x);
}

const p = new MyPromise((resolve, reject) => {
    resolve(1);
}).then(value => {
    console.log('===1', value)
    return 1 + value;
}, error => {
    console.log(error)
}).then(value => {
    console.log('===2', value)
})