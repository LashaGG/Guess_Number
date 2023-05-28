let counter = 0;
let record = 500;
let random = 50;  //Math.floor(Math.random() * 100) + 1;
let previous = 0;
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        checkGuess();
    }
});

function restart() {

    let newRand = Math.floor(Math.random() * 100) + 1;
    if (newRand === random) {
        restart();
        return;
    }

    random = newRand;

    document.querySelector(".btn").textContent = "Restart";
    document.getElementById("guess").value = '';


    if (counter < record) {
        record = counter;
        document.getElementById("record").textContent = `record is ${record} tries`;
    }
    counter = -1;
}

function checkGuess() {


    const guessInput = document.querySelector("#guess");
    const answer = document.getElementById("answer");
    const number = Number(guessInput.value);


    document.querySelector(".btn").textContent = "Check";

   if(number !== previous)  riseCounter();

   previous = number;



    let ans = "📉 Too Small";
    answer.style.color = "#4942E4";

    if (number === random) {
        ans = "Correct ✅";
        answer.style.color = "#14C38E";
        restart();
    } else if (number > random) {
        ans = "Too Big 📈";
        answer.style.color = "#CD1818";
    }
    else  if(number === 0) ans="";

    answer.textContent = ans;

}

function riseCounter() {
    counter++;
    const htmlCounter = document.querySelector(".counter");
    htmlCounter.textContent = `tries: ${counter}`;

    if (counter > 3) {
        htmlCounter.style.color = "#EF5B0C";
        if (counter > 6) htmlCounter.style.color = "#DF2E38";
    } else htmlCounter.style.color = '#539165';
}
