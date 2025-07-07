function frankenSplice(array1, array2, index) {
    var array = array2.slice();
    for(var i in array1){
        array.splice(index,0, array1[i]);
        index = index+1;
    }
    console.log(array1);
    
    console.log(array2);
    
    return array
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));


