// HTML DOM

// 1. Element: ID, class , tag, CSS selector, HTML collection
// CSS selector, HTML collection

// Trả về Object hay nói khác đi là chính nó
var headingNode = document.getElementById('heading');

// Trả về mảng 
var headingBehind = document.getElementsByClassName('heading-behind');// Cho phep lay nhieu class name
var headingTag = document.getElementsByTagName('p');


// querySelector chỉ trả về 1 và sẽ là cái đầu tiền nếu có nhiều cái trùng
var headingCss = document.querySelector('.heading-behind');// Giống như lúc mình code css
// Cách trả về tất cả và nó là mảng bằng querySelectorAll


// HTML collection: các đối tượng như form, img, link,a , script
var heading3 = document.querySelector('h3');

// Cach access từ cha xuống con
var boxNode = document.querySelector('.box-1');
console.log(boxNode.querySelectorAll('li'));

// => Tóm lại là chỉ có getElementById và querySelector là trả về trực tiếp đối tượng còn những cái còn lại sẽ trả về mảng

// console.log(headingNode);
// console.log(headingBehind);
// console.log(headingTag);
// console.log(headingCss);


// 2. Attribute
// Them Attribute - setter
headingTag.className = 'headingTag';// Khong dung duoc vi no chi dung voi querySelector vì nó không trả về 1 phần tử duy nhất
heading3.className = 'headingTag';

// Them Attribute - phương thức (tiện hơn vì có thể thêm những thuộc tính có thể không thuộc về Element đó)
heading3.setAttribute('class','heading');
heading3.setAttribute('href','heading');

// Lấy ra giá trị của Attribute
// Cách dùng cho Attribute hợp lệ
var b = headingTag.className;
console.log(b);

// Cách này dùng cho cả Attribute hợp lệ và không hợp lệ
var a = heading3.getAttribute('class');
console.log(a);

// 3. Text

// innertext và textContent

// Lấy ra nội dung chữ - Hai cái như nhau 
var headingText = document.querySelector('.li-box-1');
console.log(headingText.innerText);
console.log(headingText.textContent);

// Gán nội dung - khi mã js được thực thi - Hai cái như nhau 
headingText.innerText = "Vũ Hoàng Hà";
headingText.textContent = "Trần Thị Trang";

// Sự khác biệt
// Khi Get 
// Khi get thì innerText sẽ trả vê những gì nhìn thấy trên gg 
// Còn textContent thì sẽ trả về text trong code nhưng tính cả khoảng trắng và các đoạn textnote trong code 

// Khi Set 
// Nếu đừng ở textNode mà gọi đến innerText thì sẽ không được, mà phải gọi từ Element, còn textContent thì tồn tại trên cả 2

// Khi muốn lấy giá trị text của input và textarea thì ta dùng .value chứ ko dùng cái này 
// Còn với các thẻ như div hay span, p thì ta sẽ dùng innerText




