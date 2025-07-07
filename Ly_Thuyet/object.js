// Với một giá trị key không tồn tại thì nó sẽ trả về undefined

var emailKey = 'email';

var myInfo = {
    name: 'Hoang Ha',
    age: 21,
    address: 'Thai Binh',
    [emailKey]: 'hoangha182712@gmail.com',
    getName: function(){
        return this.name;
        // Sử dụng this trong trường hợp này giúp sau này khi tên hàm thay đổi 
        // ta sẽ không cần sửa ở các hàm bên trong
    }
}

// Thêm key và value

myInfo.email = 'hoangha182712@gmail.com';

console.log(myInfo);

console.log(myInfo.email); // Cach 1
console.log(myInfo['email']); // Cach 2

console.log(myInfo.getName());//3 
console.log(typeof myInfo.getName);//4

// Việc 3 và 4 không có dấu ngoặc là vì khi muốn hàm thực thi ta cần có call tức là ()
// Trong trường hợp nó là 1 function trong 1 object ta gọi là method - phương thức
// Còn lại là thuộc tính - property

// 2. Object Contructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

}

var author = new User('Hoang','Ha','Jacker');
var user = new User('Hoang','Hai','V');

console.log(author);
console.log(user);




