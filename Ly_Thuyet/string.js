/*
Chuỗi trong js
*/

// 1. Cách tạo chuỗi

var fullName = 'HoangHa';

// 2. Một số case sử dụng backslash (\)

var superFullName = 'Vu Hoang Ha la \'Sieu Nhan\'';

var nameTrang = "Day la dau backslash \\"

console.log(superFullName);
console.log(nameTrang);

// 3. Xem độ dài Chuỗi

console.log(nameTrang.length);

// 4. Dấu ủy quyền `` có tác dụng tạo chuỗi mẫu hay đưa biến có giá trị vào chuỗi

// 5. Template String

console.log(`Chú ý ${superFullName} và ${nameTrang}`);
console.log("${}");

