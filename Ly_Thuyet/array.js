/* Mảng trong js 
1. Tạo Mảng
2. Truy xuất Mảng
3. Làm việc với mảng

*/

// 1. Tạo Mảng
// Khi tạo mảng nên tạo số nhiều để thể hiện ý nghĩa

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(languages);
// Kiểu dữ liệu của array là 1 object
console.log(typeof languages);

// Cách phân biệt array và object

console.log(Array.isArray(languages));

// 2. Truy xuất mảng 

console.log(languages[0]);


// 3. To String

// console.log(languages.toString());

// 4. Join - Chuyển array thành chuỗi với một dấu ngăn cách có thể khác dấu phẩy

// console.log(languages.join(' - '));

// 5. Pop - Xóa phần tử cuối mảng và trả về phần tử đó

// console.log(languages.pop());
// console.log(languages.pop());
// console.log(languages.pop());
// console.log(languages.pop());// Khi xóa hết thì trả về undefined

// console.log(languages);

// 6. Push - thêm 1 phần tử vào cuối mảng và trả về độ dài array
// console.log(languages.push('Python', 'Java'));

// 7. Shift - Xóa 1 phần tử ở đầu và trả về phần tử đã xóa
// Khi xóa hết thì trả về undefined

// console.log(languages.shift());

// 8. Unshirt - Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài

// console.log(languages.unshift('Python'));
// console.log(languages.unshift('Java'));

// 9. Splice - Xóa 1 phần tử trong array và thêm vào nếu dùng tham số thứ 3
console.log(languages);

languages.splice(1,1,'Python');
console.log(languages);

// 10. Concat - Nối array

var languages2 = [
    'C',
    'C++'
]

console.log(languages.concat(languages2));

// 11. slice

console.log(languages.slice(0,1));
console.log(languages.slice(-2,-1));














