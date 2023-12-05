// UI LOGIC //

document.addEventListener("DOMContentLoaded", () => {

    const pigDiceUserForm = document.getElementById("pigdiceUserForm");
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();

    })
});

// BUSINESS LOGIC //

function pigGame() {


}

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6);
}

// console.log(diceNumberRandomizer(6));

function diceRollContainer() {

    const resultsContainer = [];

    //const randomNumber = diceNumberRandomizer();//
    //resultsContainer.push(randomNumber);//
}

c

function diceScoreAdditionLoop() {
    let sum = 0;

    for (let i = 0; i < diceRollContainer.length; i++) {
        sum += diceRollContainer[i];
    }
    return sum;
}

function finalScoreCounter(totalScore, currentScore) {
    if (diceNumberRandomizer(1)) {
        return totalScore : 0;
    } else {
        return currentScore + diceNumberRandomizer;
    }
}
console.log(finalScoreCounter(7, 4))


