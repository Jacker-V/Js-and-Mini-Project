/*
    Array method:
        forEach() - duyet qua
        every() - duyệt và kiểm tra tất cả, giá trị trả về là boolean
        some() - duyệt và kiếm tra và dừng ngay khi kết quả đúng, kiểu trả về là boolean
        find() - tìm phần tử trong mảng, trả về giá trị là boolean nhưng sẽ gán giá trị phần tử tìm được cho biến muốn gán
        filter() - giống như find nhưng sẽ trả về tất cả các phần tử thỏa mãn
        map() - Chỉnh sửa hay thay đổi element của array
        reduce()
*/ 


var courses = [
    {
        id: 1,
        name:'Javascript',
        coin: 100
    },
    {
        id: 2,
        name:'Java',
        coin: 0
    },
    {
        id: 3,
        name:'Python',
        coin: 200
    },
    {
        id: 4,
        name:'C',
        coin: 0
    },
    {
        id: 5,
        name:'C++',
        coin: 300
    },
    {
        id: 6,
        name:'Java',
        coin: 300
    },
];

// 1. forEach

courses.forEach(function (course,index) {
    console.log(index, course);
    
});// callback


// 2. every

var isFree = courses.every(function (course,index) {
    return course.coin === 0;
});// Kiểm tra xem tất cả các khóa học có miễn phí không

console.log(isFree);


// 3. some 

var isFreeSome = courses.some(function (course,index) {
    console.log(index); 
    return course.coin === 0;
});

console.log(isFreeSome);

// 4. find
var isThat = courses.find(function (course,index) {
    // console.log(index); 
    return course.name === 'Java';
});

console.log(isThat);

// 5. filter

var isFilter = courses.filter(function (course,index) {
    // console.log(index); 
    return course.name === 'Java';
});

console.log(isFilter);


// 6. map - duyệt qua từng phần từ và mỗi lần gặp 1 phần tử sẽ call lại function được truyền vào

function backCourse(course,index) {
    return {
        id: course.id,
        name: `Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        index: index
    };
    
}


var newCourses = courses.map(backCourse);

console.log(newCourses);
