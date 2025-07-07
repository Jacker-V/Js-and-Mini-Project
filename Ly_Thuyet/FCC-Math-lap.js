var fortune1 = "Your cat will look very cuddly today.";
var fortune2 = "The weather will be nice tomorrow.";
var fortune3 = "Be cautious of your new neighbors.";
var fortune4 = "You will find a new hobby soon.";
var fortune5 = "It would be wise to avoid the color red today.";

var randomNumber = Math.floor(Math.random()*5) + 1;
console.log(randomNumber);
var selectedFortune;

if (randomNumber===1) {
    selectedFortune = fortune1;
}else if (randomNumber===2) {
    selectedFortune = fortune2;
}else if (randomNumber === 3) {
    selectedFortune = fortune3;
}else if (randomNumber === 4) {
    selectedFortune = fortune4;
}else{
    selectedFortune = fortune5;
}
console.log(selectedFortune);


