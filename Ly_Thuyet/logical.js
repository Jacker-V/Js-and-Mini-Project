// Câu lệnh điều kiện và phép so sánh

/*
6 giá trị sẽ nhận giá trị boolean


0
''
null
undefined
NaN
false


Ngoài 6 giá trị này sẽ là true
*/


var a= 1;
var b= 2;

var result = 'A' && 'B' && 'C';

var result2 = null && 'B';

var result3 = 'A' || 'B'

console.log('result', result);
console.log('result2', result2);
console.log('result3', result3);


if (!result2) {
    console.log("Dieu kien sai");
    
    
}else{
    console.log("Dieu kien dung");
    
}


// if (a<b){
//     console.log('A < B');
// }else{
//     console.log('A > B');
// }