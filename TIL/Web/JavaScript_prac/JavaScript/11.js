// 콜백 함수 
function completeTask() {
    console.log('completeTask 함수 시작');
}

function startTask(callbackFunction) {
    console.log('startTask 함수 시작');
    callbackFunction(); // completeTask()
    console.log('startTask 함수 종료');
}

startTask(completeTask);
// completeTask()
/////////////////////////////////////////////

// 일급 객체
const greet = function(name) {
    return `안녕하세요, ${name}님!`;
}
console.log(greet("Yoonseok"));


const applyOperation = (func, number) => {
    return func(number);
}
const double = x => x*2;
console.log(applyOperation(double, 5))

///////////////////////////////////////////////

const makeMultiplier = (n) => {
    return (x) => x * n;
}

const doubleNumber = makeMultiplier(2);
const tripleNumber = makeMultiplier(3);

console.log(doubleNumber(5)); // 결과: 10
console.log(tripleNumber(5)); // 결과: 15

//////////////////////////////////

const operations = {
    add: (a,b) => a+b,
    mul: (a,b) => a*b
}
console.log(operations.add(5,7))
console.log(operations.mul(5,7))

//////////////////////////

// forEach
const numbers = [1,2,3,4];
numbers.forEach((num) => {
    console.log(num);
});

for (i of numbers) {
    console.log(i)
}
///////////////////

// map
const doubled = numbers.map((num)=> {
    return num*3
})
console.log(doubled)
/////////////////

// filter()
const evenNumbers = numbers.filter((num)=>{
    return num%2 ==0
});
console.log(evenNumbers)


//
const movies = [
    {title: "matrix", isAdult: false},
    {title: "kingsman", isAdult: true},
    {title: "zootopia", isAdult: false}
]

movies.forEach ((n) => {
    if (n.isAdult === true){
        console.log("청불:", n)
    }
    else {
        console.log("전체관람가:", n)
    }
})

let babyMovies = movies.filter(function (movie) {
    return !movie.isAdult
})
console.log(babyMovies)

// reduce()
const numbers1 = [1,2,3,4];
const sum = numbers1.reduce((a,b) =>{
    console.log(a,b);
    return a+b
})
console.log(sum)