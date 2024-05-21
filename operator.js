// let a = 1, b = 2;
let a = 1;
let b = 2;

let c = (a++, b++);
// const c = ((a = a + 1), (b = b + 1));
console.log('c =', c, a, b);

let d = (a--, b + a);
console.log('d =', d, a, b);

d = void (c = a + b);
console.log(a, b, c, d);

console.log('-------------------')
const first = 'Uncle';
const last = 'Bob';
if (first) {
    console.log(first);
}
console.log(last);

let FullName = first ? first + ' ' : '';
//          'Uncle ' + 'Bob'
//            ''     + 'Bob'
FullName = FullName + last;
console.log('fullName =', FullName);

console.log(`${first}${first ? ' ' : ''}${last}`);
