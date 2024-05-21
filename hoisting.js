console.log(' i = ', i);
var i = 1;

console.log('-----------------------');

//개인 실습

///////////////중복선언과 재할당 체크//////////////
//// 1 . var ////
var dyopavar = 'cute';
var dyopavar = 'lovely'; //변수 중복 선언가능
dyopavar = 'pretty'; //변수 재할당 가능
console.log(dyopavar); //pretty

//// 2 . let ////
// let dyopalet = 'cute';
// let dyopalet = 'lovely';
//변수 중복 선언 불가능
//Uncaught SyntaxError: Identifier 'dyopalet' has already been declared

let dyopalet = 'cute';
dyopalet = 'pretty'; //변수 재할당 가능
console.log(dyopalet); //pretty

//// 3 . const ////
// const dyopaconst = 'cute';
// const dyopaconst = 'lovely';
//변수 중복 선언 불가능
//Uncaught SyntaxError: Identifier 'dyopaconst' has already been declared

// const dyopaconst = 'cute';
// dyopaconst = 'pretty';
//변수 재할당 불가능
//TypeError: Assignment to constant variable.

console.log('---------------------');

//변수의 초기화
//// 1. var ////
var jsvar;
console.log(jsvar); //undefined

//// 2. let ////
let jslet;
console.log(jslet); //undefined

//// 3. const ////
// const jsconst;
//SyntaxError: Missing initializer in const declaration
//변수 설정과 동시에 값 할당 안되어있으면 에러나

console.log('-----------------------------');

//// var 변수의 유효범위 확인 ////
// 1. 함수 사용
var ajinvar = 7;
console.log(ajinvar); //7

function ajinFunc() {
  var ajinvar2 = 10;
  console.log(ajinvar2); //10
}
ajinFunc();
console.log(ajinvar); //7

// 2. 블럭 사용
var ainvar = 7;
console.log(ainvar); //7

if (true) {
  var ainvar = 27;
  console.log(ainvar); //27
}

console.log(ainvar); //27

console.log('----------------------------');
//let과 const 변수의 유효범위

//// 1. 함수 사용 ////
let jjlet = 7;
const jjconst = 7;
console.log(jjlet); //7
console.log(jjconst); //7

function jjFunc() {
  let jjlet2 = 10;
  const jjconst2 = 10;
  console.log(jjlet2); //10
  console.log(jjconst2); //10
}
jjFunc();

console.log(jjlet); //7
console.log(jjconst); //7

//// 2. 블럭사용 ////
let jjjlet = 7;
const jjjconst = 7;
console.log(jjjlet); //7
console.log(jjjconst); //7

if (true) {
  let jjjlet2 = 27;
  const jjjconst = 27;
  console.log(jjjlet2); //27
  console.log(jjjconst); //27
}

console.log(jjjlet); //7
console.log(jjjconst); //7

console.log('=========================');

// 호이스팅

console.log(ajin2);
var ajin2 = 'cute'; //undefined

// console.log(ajin3);
// let ajin3 = 'lovely';
//ReferenceError: Cannot access 'ajin3' before initialization

// console.log(ajin4);
// const ajin4 = 'pretty';
//ReferenceError: Cannot access 'ajin4' before initialization

console.log('----------------');

// 호이스팅이 함수도 올리는가?

var jinvar;
console.log(jinvar); // undefined
jinvar = 'cute';

//// 1. 함수 선언문 ////
jiji(); // cute-lovely-pretty
function jiji() {
  console.log('cute-lovely-pretty');
}

//// 2. 함수 표현식 ////
// angu(); //TypeError: angu is not a function
// var angu = function () {
//   console.log('babo');
// };
