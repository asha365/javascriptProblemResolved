var a = 10;
var b = 20;
console.log('before swap: a=', a, 'b=', b);
var temp = a;
a = b;
b = temp; 
console.log('after swap: a=', a, 'b=', b);

//swap without temporary variable
var x = 15;
var y = 30;
x = x + y;
y = x - y;
x = x - y;
console.log('after swap: x=', x, 'y=', y);

//programming language specific
var p = 50;
var q = 60;
[p,q] = [q,p];
console.log('after swap: p=', p, 'q=', q);




