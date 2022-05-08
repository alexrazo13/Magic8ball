// Function
function generate_random(max_number) {
    return Math.round(Math.random()*max_number);
}

//Elements on page to interact with
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

//Button
button.addEventListener("click", function() {
//What answers will be
// 0 -> YASSSSS QUEEN!!!
// 1 -> lol, no. 
// 2 -> Yikes
// 3 -> Luck is on your side

//Generate a random number
let randomNumber = generate_random(3);


let answerText = "";

if (randomNumber == 0) {
    answerText = "YASSSSS QUEEN!";
}

else if (randomNumber == 1) {
    answerText = "lol, no";
}

else if (randomNumber == 2) {
    answerText = "Yikes";
}

else {
    answerText = "Luck is on your side";
}

answer.innerHTML = answerText;

});