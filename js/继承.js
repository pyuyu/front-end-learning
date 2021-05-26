function Parent() {
  this.name = 'parent'
  this.type = 'parent'
}
Parent.prototype.say = function () {
  console.log('parent say')
}
Parent.prototype.work = function () {
  console.log('parent work')
}

function Child() {
  Parent.call(this)
  this.type = 'child'
}

function F() { }
F.prototype = Parent.prototype
Child.prototype = new F()
// Child.prototype = Object.create(Parent.prototype)
Child.prototype.construcotr = Child

Child.prototype.say = function () {
  console.log('child say')
}

let child = new Child()
console.log(child)

