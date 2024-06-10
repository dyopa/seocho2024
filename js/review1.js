//할당//구조분해할당//스프레드//나머지

let x, y;
x = y = 9;
const z = (y++, x + y); //19
x += y; //19
x %= y; //8
x ^= y; //2

const u = { id: 1, name: 'Hong', age: 29 };
// let { id, name, addr } = u;
// console.log('🚀 ~ addr:', addr); //undefined
let { id, ...info } = u; //id = 1, info ={name: 'Hong', age: 29}

let user = { id1: 1, user_name: 'John', age: 30 };

let id1, user_name;
// This will throw a SyntaxError
// { id, name } = u; // SyntaxError: Unexpected token '='

({ id1, user_name } = user);

console.log(id1); // 1
console.log(user_name); // John

const arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr; // a= 1,b=2,c=[3,4,5]
[a, b] = [b, a]; //[2,1] 값을 교환
console.log('🚀 ~ a:', a);
console.log('🚀 ~ b:', b);

const { id0, username } = { id0: 1, username: 'Hong' };

const [a1, b1] = [1, 2];

const { id2, name1, addr = 'Seoul' } = { id2: 1, name1: 'Hong', add: 'Pusan' };

const [a2, b2, c2 = 3] = [1, 2];

console.log('구조분해할당----------------');

//배열의 구조분해할당
const array = [1, 2, 3];

// 일반적인 변수 할당
// const a = array[0];
// const b = array[1];
// const c = array[2];

// 구조 분해 할당
const [x0, y0, z0] = array;

console.log(x0); // 1
console.log(y0); // 2
console.log(z0); // 3

console.log('구조분해할당----------------');
//객체의 구조분해할당
const person = {
  name2: 'John',
  age2: 30,
  city2: 'New York',
};

// 일반적인 변수 할당
// const name2 = person.name;
// const age2 = person.age;
// const city2 = person.city;

// 구조 분해 할당
const { name2, age2, city2 } = person;

console.log(name2); // John
console.log(age2); // 30
console.log(city2); // New York

console.log('구조분해할당----------------');
// 기본값 설정

const array1 = [1, 2];
const [x4, y4, z4 = 3] = array;

console.log(x4); // 1
console.log(y4); // 2
console.log(z4); // 3

console.log('구조분해할당----------------');
//Argumennts Destruturing
//혼합 사용 : 함수의 매개변수로 객체와 배열을 혼합사용 가능해용!
function processData({ name, scores: [math, science, english = 0] }) {
  console.log(`Name: ${name}`);
  console.log(`Math: ${math}`);
  console.log(`Science: ${science}`);
  console.log(`English: ${english}`);
}

const student = {
  name: 'John',
  scores: [90, 85],
};

processData(student);

console.log('구조분해할당----------------');
const user0 = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
function fn(arg1, { id: name }, arg2) {
  console.log(arg1, id, name, arg2);
}

fn(10, user0, 20);
