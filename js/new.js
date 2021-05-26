function newMock() {
    let obj = {}
    let Constructor = [].shift.call(arguments)
    Object.setPrototypeOf(obj, Constructor.prototype)
    let res = Constructor.apply(obj, arguments)
    return res instanceof Object ? res : obj
}

function Person(name, age) {
    this.strength = 60;
    this.name = name;
    this.age = age;

    // return {
    //     name,
    //     habit: 'code'
    // }
}

Person.prototype.say = function () {
    console.log('say')
}

var person = newMock(Person, 'Kevin', '18')
console.log(person.name)
console.log(person.habit)
console.log(person.strength)
console.log(person.age)
person.say()