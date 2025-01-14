for (let i = 0; i < 5; i++) {
    console.log(`현재 숫자 : ${i}`);
}

console.log("-------------------")

let list = ['a','b','c','d','e'];
for (let i of list) {
    console.log(i);
}
console.log("-------------------")
// for (let i = 0; i<list.length; i++){
//     console.log(list[i]);
// }
// console.log("-------------------")

for (let i=0; i<7; i++){
    if (i===4) {
        break;
    }
    console.log(i);
}
console.log("-------------------")

for (let i=0; i<7; i++){
    if (i===4) {
        continue;
    }
    console.log(i);
}
console.log("-------------------")

let i = 0
while (i<5){
    console.log(i);
    i += 1;
}
console.log("-------------------")

for (let j = 2; j<10; j++){
    for (let i = 1; i < 10; i++) {
        console.log(`${j} x ${i} = ${j*i}`)
    }
    console.log("----------")
}

let info = [
    {
        "name":"Yoonseok Choi",
        "age":30,
        "city":"Seoul"
    },
    {
        "name":"Chris",
        "age":12,
        "city":"Busan"
    },
    {
        "name":"Alex",
        "age":32,
        "city":"Tokyo"
    },
    {
        "name":"Ian",
        "age":23,
        "city":"Osaka"
    }
];
// console.log(info);

for (let i of info){
    console.log(i.name, i.city)
}