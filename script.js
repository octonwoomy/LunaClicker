const button = document.getElementById("button");
const counterText = document.getElementById("counter");
const upgradeButton = document.getElementById("upgrades");
const upgradePage = document.getElementById("upgrades-page");
const upgradeDouble = document.getElementById("double");
const backButton = document.getElementById("back");
const UpgradeTriple = document.getElementById("triple")
let Buyable1 = true;
let Buyable2 = true;
let counterIncrement = 1;
let counter = 0;

function AddCounter(){
    counter += counterIncrement;
    counterText.textContent = `Times Clicked: ${counter}`;
}

function DisplayUpgrades(){
    upgradePage.style.display = "block";
}
function EndUDisplay(){
    upgradePage.style.display = "none";
}
function BuyDouble() {
    if (counter >= 50 && Buyable1 === true) {
        counter -= 50;
        counterText.textContent = `Times Clicked: ${counter}`;
        counterIncrement *= 2;
        Buyable1 = false;
    }
    else{
        alert("You're broke lol")
    }
}
function BuyTriple(){
    if (counter >= 300 && Buyable2 === true) {
        counter -= 300;
        counterText.textContent = `Times Clicked: ${counter}`;
        counterIncrement *= 3;
        Buyable2 = false;
    }
    else{
        alert("You're broke lol")
    }
}


UpgradeTriple.addEventListener("click", BuyTriple)
upgradeDouble.addEventListener("click", BuyDouble)
backButton.addEventListener("click", EndUDisplay)
upgradeButton.addEventListener("click", DisplayUpgrades)
button.addEventListener("click", AddCounter)