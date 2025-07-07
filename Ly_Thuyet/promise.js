// Sync / Async
setTimeout(function(){
    console.log(1);
},1000);
console.log(2);

// Callback hell (Goi call back lien tuc trong funtion)

// Promise 

var promise = new Promise(// ở đây hàm bên trong sẽ được thực thi ngay lập tức trước khi được gán cho biến
    function name(resolve, reject) {
        // Logic
        // Thanh cong : resolve()
        // That bai : reject()

    }
);

