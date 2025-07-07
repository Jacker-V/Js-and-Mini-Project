/* Hàm
Cách đặt tên Hàm
- Không đặt số ở kí tự đầu

1. Arguments
    - Dùng để truyền vào giá trị nhưng ko cần truyền tham số
    - Giới thiệu vòng for of

2. Các loại funtion

Declaration và Expression khác nhau ở chỗ Declaration sẽ có thể được gọi trước khi được khai báo

*/

// Declaration funtion
function showDialog() {
    // code
    alert('Hi xin chao cac ban');
}

showDialog();

function writeLog(){
    for (var param of arguments) 
        console.log(param);
    
}

writeLog('Log1', 'Log2', 'Log3');

// Expression function

var showMessage = function(){

}// Cach 1


setTimeout(function (){

});// Cach 2


var myObject = {
    myFuntion: function(){

    }
}// Cach 3



