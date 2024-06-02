globalThis.name = 'GLOBAL';
this.name = 'MODULE';

const obj = {
  name: 'OBJ',
  f1: function () {
    //함수선언문(펑션키워들르쓰니까)
    //프로퍼티
    console.log('f1 =', this.name);
  },
  f2: () => {
    //화살표함수 //오해의 소지가 있는 코드니까 상위가 뭔지 'OBJ'라고 헷갈릴수있으니까 쓰면안돼
    //프로퍼티
    console.log('🚀 ~ f2:', this.name);
  },
  f3() {
    //메소드
    console.log('🚀 ~ f3 :', this.name);
  },
};

obj.f1(); //OBJ
obj.f2(); //MODULE
obj.f3(); //OBJ
const nm = obj.name;
console.log('🚀 ~ nm:----------------', nm);
//이 밑에처럼 부르면 안되긴해
const f11 = obj.f1;
const f22 = obj.f2; //화살표함수는 상위를 향하니까 f22가 있는 상위인데 더이상 없으니까 module
// const f33 = obj.f3;
f11();
f22();
// f33(); //typeerror : cannot read properties of undefined (reading name) in strict mode!

class Dog {
  f1() {
    console.log('🚀 ~ Dog ~ f1', this.name);
  }
}

// Dog.f1(); //에러남
Dog.prototype.f1(); //강제로 부른거야 //메소드와 프로토타입 관계 알아보기
