let messageInput = document.getElementById('message-input');
let result = document.getElementById('result-message');
let checkMessageButton = document.getElementById('check-message-btn');
let helpRegex = /please help|assist me/i;
let denyList = [helpRegex];
let dollarRegex = /[0-9]+ (hundred|thousand|million|billion) dollars/i;
const freeRegex = /\sfr[e3][e3] m[o0]n[e3]y\s/i;
denyList.push(dollarRegex);
denyList.push(freeRegex);
// console.log(denyList);


checkMessageButton.addEventListener('click', ()=>{
    if (messageInput.value.trim() === "") {
        alert("Please enter a message.");
    }
    // console.log(messageInput.innerText);
    result.innerText = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." :"This message does not seem to contain any spam.";
    messageInput.value = "";
});


function isSpam(msg) {
    return denyList.some(e => e.test(msg));
}



