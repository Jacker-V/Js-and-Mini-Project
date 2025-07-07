function generatePassword(params) {
    var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    var array1 = "";
    for (let index = 0; index < params; index++) {
        array1+=array[Math.floor(Math.random()*array.length)];   
    }
    return array1;
}

var password = generatePassword(5);
console.log("Generated password:"+password);
