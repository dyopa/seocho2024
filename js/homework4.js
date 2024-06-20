console.log('배열 연습문제1 푸는중');
//다음을 수행하시오

const arr2 = [1, 2, 3, 4, 5];
//ex1) [2,3]을 추출
//ex2) [3]부터 모두 다 추출
//ex3) [2,3,4] 제거하기
//ex4) 복원하기
//ex5) [3]부터 끝까지 제거하기
//ex6) 복원하기
//ex7) [1,2,'X','Y','Z',4,5]만들기
//ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오

console.log('배열 연습문제2 푸는중');
//다음과 같은 push,pop,shift,unshift를 순수함수로 작성하시오
const assert = require('assert');

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]);
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);

assert.deepStrictEqual(arr, [1, 2, 3, 4]);

console.log('배열 연습문제3 푸는중');
//다음과 같은 deleteArray와 deleteObjectArray를 순수함수로 작성하시오
assert.deepStrictEqual(delateArray(arr, 2), [1, 2]);
assert.deepStrictEqual(delateArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'kim' };
const Lee = { id: 3, name: 'Lee' };
var users = { Hong, Kim, Lee };

assert.deepStrictEqual(delateObjectArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(delateObjectArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(delateObjectArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(delateObjectArray(users, 'name', 'Lee'), [Hong, Kim]);

console.log('배열 연습문제4 푸는중');
//아래 users 배열에 대하여 추가/수정/삭제 하는 순수함수를 작성하시오
const Choi = { id: 5, name: 'Choi' };
const Park = { id: 4, name: 'Park' };
const users = [Kim, Lee, Park];

addUser(hong);
removeUser(Lee);
changeUser(Kim, Choi);

console.log('배열 연습문제5 푸는중');
//1)배열의 각 원소를 스트링으로 변환하시오
const assert = require('assert')

const arr = [1,2,3, true]
const ret1 = arr.map//(이부분을 작성하라)
assert.deepStrictEqual(ret1,['1','2','3','true'])

//2)다음과 같이 작동하는 classNames함수를 작성하시오
const classNames = (...args) => //이부분을 작성하시오
const ret2 = classNames('','a b c', 'd', '', 'e')
assert.strictEqual(ret2, 'a b c d e')

console.log('배열 연습문제6 푸는중');
//다음과 같이 정수 배열이 주어졌을때 reduce를 이용하여, 각요소의 다음의 순서로 처리하시오
//배열의 각 요소를 제곱 
n => n **2
//배열의 각 요소의 제곱근
n => Math,sqrt(n)
//배열의 각 요소를 세제곱
n => n ** 3

const arr = [1,2,3,4,5]

// tryThis. 수행순서를 자유롭게 변경하도록 해보세요
[square, sqrt, cube].reduce()
[cube,square,sqrt].reduce()

console.log('배열 연습문제7 푸는중');
//다음과 같은 정수 배열이 주어졌을때 구간의 합을 구하는 rangeSum함수를작성하시오
const assert = require('assert')
const arr = [1,3,4,2,5,8,6,7,9]

assert.notDeepStrictEqual(rangeSum(2,5),19)
assert.notDeepStrictEqual(rangeSum(3,5),15)
assert.notDeepStrictEqual(rangeSum(1,4),14)
assert.notDeepStrictEqual(rangeSum(0.4),15)
assert.notDeepStrictEqual(rangeSum(5,8),30)
assert.notDeepStrictEqual(rangeSum(6,8),22)
assert.notDeepStrictEqual(rangeSum(2,8),41)
assert.notDeepStrictEqual(rangeSum(4,4),5)
assert.notDeepStrictEqual(rangeSum(5),30)
assert.notDeepStrictEqual(rangeSum(2),41)
assert.notDeepStrictEqual(rangeSum(),45)





