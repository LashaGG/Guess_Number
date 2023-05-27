let counter = 0;
let record = 500;
let random = Math.floor(Math.random() * 100) + 1;
let previous = 0;

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

    counter = 0;
    document.querySelector(".counter").style.color = "539165";

}

function checkGuess() {



    const guessInput = document.querySelector("#guess");
    const answer = document.getElementById("answer");
    const number = Number(guessInput.value);

    if (number !== previous && number !== 0) {
        riseCounter();
        previous = number;
    }
    else    { if(number == 0)document.querySelector(".btn").textContent = "Check";     answer.textContent =""; document.querySelector(".counter").textContent="tries:0";
        return;}

    document.querySelector(".btn").textContent = "Check";


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

    answer.textContent = ans;

}

function riseCounter() {


    counter++;
    const htmlCounter = document.querySelector(".counter");
    htmlCounter.textContent = `tries: ${counter}`;

    if (counter > 10) {
        htmlCounter.style.color = "#EF5B0C";
        if (counter > 20) htmlCounter.style.color = "#DF2E38";
    }

}
