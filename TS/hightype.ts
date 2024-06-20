//코베리언스
interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}
// interface Ud2 {
//   [k: string]: string | number;
//   id: number;
//   addr: string;
// }

type Ud2 = (User | Dept) & { addr: string };
// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };

//class -------------

interface Animal {
  move(): void;
  // move: () => void;
}

class Pet implements Animal {
  name; //추론되어서 string 안써도 돼 //protected(#) , 프라이빗 두개 체크하기
  constructor(name: string) {
    this.name = name;
  }
  move(): void {
    console.log('Pet is moving!!');
  }
}

class Dog extends Pet {
  bark() {
    console.log('멍멍!', this.name);
  }
  howling() {
    console.log('아~오~', this.name);
  }
}
class Cat extends Pet {
  kukuki() {
    console.log('꾹!꾹!');
  }
  bark() {
    console.log('야옹!', this.name);
  }
}

const lucy = new Dog('Lucy');
lucy.bark();
const maxx = new Dog('Max');
maxx.howling();
console.log('🚀 ~ maxx:', maxx.name);

const happy = new Cat('Happy');
happy.bark();
happy.kukuki();
