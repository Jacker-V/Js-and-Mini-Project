//
var courses = [
    "Js",
    "PHP"
]

courses.length = 10;
// Từ đây thì courses sẽ có thêm 8 phần tử empty
// Từ đó thì khi sử dụng vòng for có thể nó sẽ hiện ra các phần tử empty
for (let index = 0; index < courses.length; index++) {
    console.log(courses[index]);   
}

// Khắc phục bằng cách sử dung for in ==> nó sẽ chỉ duyệt qua phần tử thực
for(var index in courses){
    console.log(index);
}

// Cách tạo ra 1 mảng trống

var a = new Array(10);
console.log(a);
// Nếu truyền 2 số thì sẽ hiểu là 2 phần tử

var b= new Array(10,11);
console.log(b);


