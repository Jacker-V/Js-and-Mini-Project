// Làm việc vói Chuỗi

var myString = '  Hoc JS tai JS JS F8'

console.log(myString);


// 1. length

console.log(myString.length);

// 2. Find index

console.log(myString.indexOf('JS'));// Trả về giá trị bắt đầu tìm thấy

console.log(myString.indexOf('HoangHa'));// Giá trị là -1 nếu ko thấy

console.log(myString.indexOf('JS', 6));// Bắt đầu tìm từ ký tự số 6

console.log(myString.lastIndexOf('JS'));

console.log(myString.search('JS'));// Không hỗ trợ giá trị số 2 và ko hỗ trợ biểu thức chính quy



// 3. Cut String
console.log(myString.slice(4,6));
console.log(myString.slice(4));
console.log(myString.slice(-3,-1));




// 4. Replace
console.log(myString.replace('JS','Javascript'));

// Sử dụng biểu thức chính quy để thay toàn bộ JS
console.log(myString.replace(/JS/g, 'Javascript'));

// 5. Convert to upper case
console.log(myString.toUpperCase());


// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim

console.log(myString.trim());

// 8. split - Tách chuỗi thành các array
var lang = 'Javascript, PHP, Ruby';

console.log(lang.split(','));


// 9. Get a character by index

console.log(lang.charAt(1));
