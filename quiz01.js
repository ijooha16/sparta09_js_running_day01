//01
let uninitialized;
console.log(uninitialized);
// 결과값 < undefined >


//02
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//const는 재선언, 재할당 안되기 때문


//03
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]);
// 19


//04
let mySchedule = "";
console.log(mySchedule || false); //false
console.log(!!mySchedule); // false
//이유 모르겠음