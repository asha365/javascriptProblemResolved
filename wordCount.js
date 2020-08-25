var speech = "you  are  a good  person. I don't snore at night";
//not change
//speech[2] = "q";
//console.log(speech.length[4]);
var count = 0;
for(var i = 0; i < speech.length; i++){
    var latter = speech[i];
    //count word
    //console.log(latter);
    if(latter == " " && speech[i-1] !=" "){
        count++;
    }

}
count++;
console.log(count);
