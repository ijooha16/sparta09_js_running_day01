//01
let uninitialized;
console.log(uninitialized);
// 결과값 < undefined >


//02
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable


//03
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]);
// 19


//04
let mySchedule = "";
console.log(mySchedule || false); // ""
console.log(!!mySchedule); // 