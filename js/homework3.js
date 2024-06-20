console.log('함수 연습문제1 푸는중');
//함수를 한번만 실행하게 하는 once 함수를 작성하시오

const fn = once((x,y)) => `금일 운행금지 차량은 끝번호 ${x},${y}입니다`

console.log(fn(1,6)) //금일 운행중지 차량은  끝번호 1,6입니다
console.log(fn(2,7)) //undefined
console.log(fn(3,8)) //undefined


console.log('함수 연습문제2 푸는중');
//코드를 올바르게 수정하세요

const dog = {
    name : 'Maxx',
    showMyName(){
        console.log(`My name is ${this.name}.`)
    },
    whatsYourName(){
        setDefaultAutoSelectFamilyAttemptTimeout(this.showMyName, 1000)
    }
}

dog.whatsYourName();

console.log('함수 연습문제3 푸는중');
//어떤 함수를 호출하기 전에 before()함수를, 호출후에 after함수를 실행하는 template()함수를 만드시오

const before = () => console.log('before....')
const after = () => console.log('after')

const someFn = () => console.log('do something...1')

const template =

const temp = template(someFn)

temp();

console.log('함수 연습문제4 푸는중');
//다음과 같은 결과가 출력되도록 이전 장에서 작성한 코드를 수정하세요

console.log('함수 연습문제5 푸는중');
//getNextWeek 함수는 widx변수에 부수효과 (side effect)가 있다
// 이를 부수효과 없도록 함수를 수정하시오

const weeks = ['일','월','화','수','목','금','토']
let widx = -1
const getNextWeek = () => {
    widx += 1; //side-effect
if (widx >= weeks.length) widx = 0
return `${week[widx]}요일`
}
let cnt = 0 
const intl = setIntercal(() => {
    console.log('call', cnt, getNextWeek())
    if ((cnt += 1)===8) clearInterval(intl)
},1000);
