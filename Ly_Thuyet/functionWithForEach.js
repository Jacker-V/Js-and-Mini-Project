// forEach

// Định nghĩa 1 hàm mới vào Contructor Array, và vì course là 1 array nên nó sẽ được thừa hưởng
Array.prototype.forEach2 = function (callback) {
    for(var index in this){// Nó không chỉ duyệt qua element nằm trong mảng mà còn duyệt qua element nằm trong proto
        
        if (this.hasOwnProperty(index)) {// Cachs de khong duyet qua thang prototype
            callback(this[index],index,this)
            
        }
        
    }
}



var course = [
    "Js",
    "python",
    "Java"
];

// course.length = 10

course.forEach2(function (course, index, array) {
    console.log(course, index, array);
});

// forEach nó không return
// forEach chỉ chạy qua phần tử thực






