// 'use strict';

// console.log('this=', this);
// f = 1; //ReferenceError: f is not defined
// NaN = 1; //TypeError: Cannot assign to read only property 'NaN' of object '#<Object>'
// Infinity = 0; //TypeError: Cannot assign to read only property 'Infinity' of object '#<Object>'
// function f(a, a) { //SyntaxError: Duplicate parameter name not allowed in this context
// console.log('outer f');
// }
// delete f1; //SyntaxError: Delete of an unqualified identifier in strict mode.
// {
//   f(100);
//   function f(a) {
//     console.log('block f', a);
//   }
// }
// f(200);

var gg = 1;
let bb = 2;

function f1(x, y) {
  var gg = 11;
  let bb = 22;
  console.log('f1>', gg, bb, zz, f2, f2.length);
  f2('* first');
  {
    const xx = 99;
    f2('* nest-first');
    var zz = 88;
    function f2(t) {
      console.log(t, '`nested`', xx, zz);
    }
  }
  function f2(t, u) {
    console.log(t, '`inner`', xx, zz);
  }
  function f2(t, u, v) {
    console.log(t, '`inner2`', xx, zz);
  }
  var zz = 800;
  console.log('🚀  gg:', gg);
  f2('* second');
}
function f2(g) {
  console.log(g, 'global f2>', gg, bb, xx, kk);
}
let xx = 9;
if (gg > 0) {
  var kk = 33;
  const yy = 9;
}
f1(1, 2);
console.log('kkkkk>>', kk);
f2('* third');
