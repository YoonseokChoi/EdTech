function greet(name){
    return `안녕하세요 ${name}님!`
}
console.log(greet("Yoonseok"))
console.log("----------------------")

function add(a, b){
    return `${a} + ${b} = ${a+b}`
}
console.log(add(4,6))
console.log("----------------------")

let sub = function(c,d) {
    return `${c} - ${d} = ${c-d}`
}
console.log(sub(10,4))
console.log("----------------------")

let sub1 = (c,d) => {
    return `${c} - ${d} = ${c-d}`
}
console.log(sub(10,4))
console.log("----------------------")

const add3 = (a,b) => {
    return `${a} + ${b} = ${a+b}`
}
console.log(add3(3,4))
console.log("----------------------")

const person = {
    name: 'YS',
    greet() {console.log('ㅎㅇㅎㅇ')}
}
person.greet()
console.log(person.name)
console.log("----------------------")

const person1 = {
    age:19,
    greet(a, b) {
        console.log(a+b)
    }
}
person1.greet(2,5)
console.log(person1.age)
console.log("----------------------")