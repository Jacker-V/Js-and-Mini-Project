const maskEmail = (email) =>{
    var Vt = email.indexOf("@");
    var PhanTruoc = email.slice(0,Vt);
    var PhanSau = email.slice(Vt);
    if (PhanTruoc.length <= 2) {
        return email;
    }else{
        var SoDauSao = PhanTruoc.length - 2;
        var DauSao = "*";
        var ChuoiTraVe = PhanTruoc[0] + DauSao.repeat(SoDauSao) + PhanTruoc[PhanTruoc.length-1] + PhanSau
        return ChuoiTraVe;
    }
    

}

var email = "apple.pie@example.com";
console.log(maskEmail(email));
