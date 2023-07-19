const button = document.getElementById("button");
const counterText = document.getElementById("counter");
const upgradeButton = document.getElementById("upgrades");
const upgradePage = document.getElementById("upgrades-page");
const upgradeDouble = document.getElementById("double");
const backButton = document.getElementById("back");
let Buyable = true;
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
    if (counter >= 50 && Buyable === true) {
        counter -= 50;
        counterIncrement *= 2;
        Buyable = false;
    }
}

upgradeDouble.addEventListener("click", BuyDouble)
backButton.addEventListener("click", EndUDisplay)
upgradeButton.addEventListener("click", DisplayUpgrades)
button.addEventListener("click", AddCounter)