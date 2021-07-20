function Promise(fn) {
  this.cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  }

  fn(resolve);
}

Promise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

let p = new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  }, 200)
})
p.then(res => console.log(res))





function MyPromise(executor) {
  let self = this
  self.value = undefined
  self.reason = undefined
  self.status = 'pending' // 默认promise状态是pending
  function resolve(value) {
    if (self.status === 'pending') { //保证状态一旦变更，不能再次修改
      self.value = value
      self.status = 'resolved' // 成功状态
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected' //失败状态
    }
  }
  executor(resolve, reject) // 因为会立即执行这个执行器函数
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  if (self.status === 'resolved') {
    onFulfilled(self.value)
  }
  if (self.status === 'rejected') {
    onRejected(self.reason)
  }
}

let p = new MyPromise(function (res, rej) {
  console.log('111');
  setTimeout(function () {
    res('aaa')
  }, 2000)
})

p.then(
  res => {
    console.log('res:', res)
  },
  error => {
    console.log('error:', error)
  }
)

MyPromise.all = function (promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    let resolveCounter = 0
    let promiseNum = promises.length
    let resolvedValues = []
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolvedValues[i] = value
        resolveCounter++
        if (resolveCounter == promiseNum) {
          resolve(resolvedValues)
        }
      }, error => {
        reject(error)
      })
    }
  })
}

function limitLoad(urls, handler, limit) {
  const sequence = [].concat(urls)
  let promises = []

  promises = sequence.splice(0, 3).map((url, index) => handler(url)
    .then(() => index)
  )

  let p = Promise.race(promises)
  for (let i = 0; i < sequence.length; i++) {
    p.then(res => {
      promises[res] = handler(sequence[i]).then(() => res)
      return Promise.race(promises)
    })
  }

}
