function sum(a, b) {
  let aArr = a.split('')
  let bArr = b.split('')
  let res = []
  if (aArr.length < bArr.length) {
    let temp = aArr
    aArr = bArr
    bArr = temp
  }
  bArr.splice(0, 0, ...Array(aArr.length - bArr.length).fill(0))
  let tenFlag = 0
  for (let i = aArr.length - 1; i >= 0; i--) {
    let temp = Number(aArr[i]) + Number(bArr[i]) + tenFlag
    if (temp >= 10) {
      tenFlag = 1
      res[i] = temp % 10
    } else {
      tenFlag = 0
      res[i] = temp
    }
  }
  return res.join('')
}

console.log(sum('11111800', '222222'))
console.log(11111800 + 222222)
