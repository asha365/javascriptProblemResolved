var name = [2, 9, 3, 3, 5, 65, 57, 8, 38, 2];
var uniqueName = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
    var element = name[i];
        uniqueName.push(element);
    }
}
console.log(uniqueName);