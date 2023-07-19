const button = document.getElementById("button");
const counterText = document.getElementById("counter");
const upgradeButton = document.getElementById("upgrades");
const upgradePage = document.getElementById("upgrades-page");
const upgradeDouble = document.getElementById("double");
const backButton = document.getElementById("back");
let counter = 0;

function AddCounter(){
    counter += 1;
    counterText.textContent = `Times Clicked: ${counter}`;
}

function DisplayUpgrades(){
    upgradePage.style.display = "block";
}
function EndUDisplay(){
    upgradePage.style.display = "none";
}

backButton.addEventListener("click", EndUDisplay)
upgradeButton.addEventListener("click", DisplayUpgrades)
button.addEventListener("click", AddCounter)