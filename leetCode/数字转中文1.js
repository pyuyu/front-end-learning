let chNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
let chUnitChar = ["", "十", "百", "千"]
let chUnitSection = ["", "万", "亿", "万亿", "亿亿"]

function formatSection(section) {
  let num = section
  let pos = 0
  let chStr = ''
  while (num > 0) {
    let v = num % 10
    chStr = chNumChar[v] + (v === 0 ? '' : chUnitChar[pos]) + chStr
    num = Math.floor(num / 10)
    pos++
  }
  chStr = chStr.replace(/零{2,}/g, '零')
  if (chStr.substr(-1) === '零') chStr = chStr.slice(0, -1)
  return chStr
}

function formatNumber(number) {
  let res = ''
  let unitPos = 0
  if (number === 0) return chNumChar[0]
  while (number > 0) {
    num = number % 10000
    if (num === 0) {
      res = chNumChar[0] + chUnitSection[0] + res
    } else {
      res = formatSection(num) + chUnitSection[unitPos] + res
    }
    if (num < 1000) res = chNumChar[0] + res
    number = Math.floor(number / 10000)
    unitPos++
  }
  res = res.replace(/零{2,}/g, '零')
  if (res.substr(-1) === '零') res = res.slice(0, -1)
  if (res.substr(0, 1) === '零') res = res.slice(1)
  return res
}

console.log(formatNumber(0))
console.log(formatNumber(1))
console.log(formatNumber(2))
console.log(formatNumber(10))
console.log(formatNumber(11))
console.log(formatNumber(110))
console.log(formatNumber(111))
console.log(formatNumber(100))
console.log(formatNumber(101))
console.log(formatNumber(1020))
console.log(formatNumber(1002))
console.log(formatNumber(100000))
console.log(formatNumber(1000000))
console.log(formatNumber(10000000))
console.log(formatNumber(100000000000))
console.log(formatNumber(20001007))
console.log(formatNumber(2000100190))
console.log(formatNumber(1040010000))
console.log(formatNumber(200012301))
console.log(formatNumber(2005010010))
console.log(formatNumber(4294967295))

