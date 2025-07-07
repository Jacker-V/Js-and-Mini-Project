function isLeapYear(year){
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !=0)) {
        return `${year} is a leap year.`
    }else{
        return `${year} is not a leap year.`
    }
}

var year = 2000;
var result = isLeapYear(year);
console.log(result);

