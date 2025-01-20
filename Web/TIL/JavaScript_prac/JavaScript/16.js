/////
const chulsoo = {
    lastName: "김", firstName: "철수",
    greeting: function () {
    return `안녕하세요 ${this.lastName + this.firstName}입니다.`;
    },
}
console.log(chulsoo.greeting());
/////

/////
const person = {
    name : 'Yoonseok',
    greet() {
        console.log(`나는 ${this.name}이다.`)
    }
}
person.greet()
/////

/////
function greet() {
    console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
}

const boy =  {
    name: '철수', greet_boy: greet
};

const girl = {
    name: '영희', greet_girl: greet
};
boy.greet_boy()
girl.greet_girl()

/////
// without arrow function
const double = {
    numbers: [1, 2, 3, 4], x: 2,
    get_double() {
        const doubled = this.numbers.map(
            function (num) {
                console.log(this);
                return num * this.x;
            }.bind(this) // bind 사용해야 함.
        ); 
        return doubled;
    },
}
console.log(double.get_double())

// with Arrow function
const triple = {
    numbers: [1, 2, 3, 4], x: 3,
    get_triple() {
        // .map 의 인자 cb 함수는 메서드가 아니지만
        // Arrow function 으로 표현했기 때문에 
        // this가 원하는 대로 bind 되었다.
        return this.numbers.map((num) => num * this.x);
    },
};
console.log(triple.get_triple())
/////