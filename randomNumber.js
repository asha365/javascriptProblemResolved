var num = 2.53989;
var result = Math.floor(num);
console.log(result);
var result2 = Math.ceil(num);
console.log(result2);
var result3 = Math.round(num);
console.log(result3);

var dice = Math.random(num) * 10;
console.log(dice);

//random number
var output = Math.round(dice);
console.log(output);

//random number using for loop 
for(var i = 0; i < 10; i++){
    var dice = Math.random(num) * 10;
    var output = Math.round(dice);
    console.log(output);
}

 
