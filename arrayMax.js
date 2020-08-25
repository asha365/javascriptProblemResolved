var marks = [81, 79, 25, 80, 95, 90, 20];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var Element =  marks[i];
    if(Element > max){
        max = Element;
    }
}
console.log('Highest value is: ', max);