//First image

var randomNum = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var diceRoll = "dice" + randomNum + ".png"; // dice1.png - dice6.png

var srcSet = `images/${diceRoll}`; // image source set

var putImage = document.querySelectorAll("img")[0]; // select the first image

putImage.setAttribute("src", srcSet); // setting the image source


// second image

var randomNumSecond = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var srcSet2 = "images/dice" + randomNumSecond+ ".png"; // image source set

var putImage2 = document.querySelectorAll("img")[1].setAttribute("src", srcSet2); // setting the image source



//Winner Update

if (randomNum > randomNumSecond) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumSecond > randomNum) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


//lets play again button
var playAgainButton = document.createElement("button");
playAgainButton.innerHTML = "Roll Dice";
playAgainButton.style.display = "block";
playAgainButton.style.margin = "20px auto";
playAgainButton.style.padding = "10px 20px";
playAgainButton.style.fontSize = "16px";
playAgainButton.style.backgroundColor = "#4CAF50"; // Green
playAgainButton.style.color = "white";
playAgainButton.addEventListener("click", function() {
    location.reload();
});
document.body.appendChild(playAgainButton);
