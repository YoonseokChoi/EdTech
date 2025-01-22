let x = 5;

if (x >= 5) {
    // 조건식이 참일 때 실행
    console.log(`${x}는 5이상 이다.`);
}

console.log('조건식 결과와 상관없이 실행된다.');


let y = 10;
if (y<=15) {
    console.log(true);
} else {
    console.log(false);
};

/// 삼항 조건문
let i = 7;
// i를 2로 나눴을 때 나머지가 0이면 result는 짝수, 1이면 result는 홀수
let result = i%2 === 0 ? '짝수':'홀수';
console.log(result);