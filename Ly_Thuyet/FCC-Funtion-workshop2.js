var minIncomeForDuplex = 60000;
var minCreditScoreForDuplex = 700;
var minIncomeForCondo = 45000;
var minCreditScoreForCondo = 680;
var minIncomeForCar = 30000;
var minCreditScoreForCar = 650;

const getLoanMessage = (annualIncome, creditScore) =>{
    if (annualIncome>= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan.";
        
    } 
    if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan.";     
    }
    if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCminIncomeForCar) {
        return "You qualify for a car loan.";     
    }
}