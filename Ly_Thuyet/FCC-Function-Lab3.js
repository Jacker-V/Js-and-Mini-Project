const truncateString = (string, number) =>{
    if (string.length <= number) {
        return string;
    } else {
        var dauSao = ".";
        var newString = string.slice(0,number) + dauSao.repeat(3);
        
        return newString;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));
