// filter : loc ra phan tu thoa man dieu kien
// nó cũng không lập qua array trống

Array.prototype.filter2 = function (callback) {
    var output = [];
    for(var index in this){
        if (this.hasOwnProperty(index) ) {
            callback(this[index], index, this);
            
            if (condition) {
                
            }
        }
    }
}

var courses = [
    {
        name: 'Js',
        coin: 10
    },
    {
        name: 'Python',
        coin: 10
    },{
        name: 'J',
        coin: 2
    },{
        name: 's',
        coin: 1
    },
];

var filterCourses = courses.filter2(function (course, index,array) {
    return course.coin > 5
});// La 1 mang moi

console.log(filterCourses);



