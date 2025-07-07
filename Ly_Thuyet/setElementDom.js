// Thêm Element vào Element DOM
// innerHTML, outerHTML

// innerHTML thêm HTML vào DOM
var boxNode = document.querySelector('.box-1');
console.log(boxNode);

boxNode.innerHTML = '<h1>Box</h1>';

// outerHTML lấy ra chính thằng HTML
console.log(boxNode.outerHTML);
