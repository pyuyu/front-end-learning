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