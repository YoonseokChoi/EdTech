// Global Scope
var globalVar = "전역 변수";
function printGlobalVar() {
    console.log(globalVar)
}
printGlobalVar()

// Block Scope
if (true) {
    let blockVar = "블록 변수";
    console.log(blockVar)
}
// console.log(blockVar) // error

// Function Scope
function funcScope() {
    let functionVar = '함수 변수';
    console.log(functionVar); // 함수 변수
}
funcScope();
// console.log(functionVar);  // error

// Scope Chain
let globalVar1 = '전역 변수';

function outerFunction() {
    let outerVar1 = '외부 함수 변수';

    function innerFunction() {
        let innerVar1 = '내부 함수 변수';
        console.log(innerVar1); // 내부 함수 변수
        console.log(outerVar1); // 외부 함수 변수
        console.log(globalVar1); // 전역 변수
    }
    innerFunction();
}
outerFunction();