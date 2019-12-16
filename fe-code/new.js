function newMock(){
    let obj = Object.create(null)
    let Constructor = [].shift.call(arguments)
    obj._proto_ = Constructor.prototype
    let res = Constructor.apply(obj, arguments)
    return res instanceof Object ? res : obj
}

function Person (name, age) {
    this.strength = 60;
    this.name = name;
    this.age = age;

    return {
        name,
        habit: 'code'
    }
}

var person = newMock(Person, 'Kevin', '18')
console.log(person.name)
console.log(person.habit)
console.log(person.strength)
console.log(person.age)