var numbers = [50, 60, 49, 93, 23, 46, 57];
var sum = 0;
for(i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;

}
console.log('total of the numbers', sum);


function getArraySum(numbers){
    var sum = 0;
    for(i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;

}
return sum;
}
var numbers = [50, 60, 49, 93, 23];
var result = getArraySum(numbers);
var result = getArraySum([49, 34, 58, 59, 20]);
console.log('total of numbers: ', result);
