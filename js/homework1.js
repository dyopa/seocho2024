console.log('디스트럭처링 연습문제1 푸는중');
//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오
//function signature를 3개 이상으로 표현하기
const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };

function f1(id, name) {
  return console.log('user=', id, name);
}
f1(hong);

var f2 = function (id, name) {
  console.log('user=', id, name);
};
f2(hong);

const f3 = (id, name) => console.log('user=', id, name);

f3(hong);

console.log('디스트럭처링 연습문제2 푸는중');
//다음 user 객체에서 passwd프로퍼티를 제외한 데이터를 userInfo라는 변수에 할당하시오

const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
const { passwd, ...userInfo } = user;
console.log(userInfo);

console.log('디스트럭처링 연습문제3 푸는중');
//다음 arr에서 3의 id를 id1, id2, id3으로 할당하시오

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;
console.log(id1, id2, id3);
//출력결과 : 1 2 3
