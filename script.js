const button = document.getElementById("button");
const counterText = document.getElementById("counter");
const upgradeButton = document.getElementById("upgrades");
const upgradePage = document.getElementById("upgrades-page");
const upgradeDouble = document.getElementById("double");
const backButton = document.getElementById("back");
const UpgradeTriple = document.getElementById("triple");
const UpgradeQuad = document.getElementById("quad");
const UpgradePenta = document.getElementById("penta");
const UpgradeHexa = document.getElementById("hexa");
const nuke = document.getElementById("nuke");
const nukeGif = document.getElementById("nukeGif");
let Buyable1 = true;
let Buyable2 = true;
let Buyable3 = true;
let Buyable4 = true;
let Buyable5 = true;
let Buyable6 = true;
let Buyable7 = true;
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
        upgradeDouble.style.backgroundColor = "black"
        upgradeDouble.textContent = "Sold Out";
        Buyable1 = false;
    }
    else if(Buyable1 === false){
        null
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
        UpgradeTriple.style.backgroundColor = "black"
        UpgradeTriple.textContent = "Sold Out";
        Buyable2 = false;
    }
    else if(Buyable2 === false){
        null
    }
    else{
        alert("You're broke lol")
    }
}

function BuyQuad(){
    if (counter >= 3000 && Buyable3 === true) {
        counter -= 3000;
        counterText.textContent = `Times Clicked: ${counter}`;
        counterIncrement *= 4;
        UpgradeQuad.style.backgroundColor = "black"
        UpgradeQuad.textContent = "Sold Out";
        Buyable3 = false;
    }
    else if(Buyable3 === false){
        null
    }
    else{
        alert("You're broke lol")
    }
}

function BuyPenta(){
    if (counter >= 10000 && Buyable4 === true) {
        counter -= 10000;
        counterText.textContent = `Times Clicked: ${counter}`;
        counterIncrement *= 5;
        UpgradePenta.style.backgroundColor = "black"
        UpgradePenta.textContent = "Sold Out";
        Buyable4 = false;
    }
    else if(Buyable4 === false){
        null
    }
    else{
        alert("You're broke lol")
    }
}

function BuyHexa(){
    if (counter >= 50000 && Buyable5 === true) {
        counter -= 50000;
        counterText.textContent = `Times Clicked: ${counter}`;
        counterIncrement *= 6;
        UpgradeHexa.style.backgroundColor = "black"
        UpgradeHexa.textContent = "Sold Out";
        Buyable5 = false;
    }
    else if(Buyable5 === false){
        null
    }
    else{
        alert("You're broke lol")
    }
}

function EndGame(){
    if (counter >= 1000000 && Buyable6 === true) {
        nukeGif.style.display = "block"
        setInterval(() => {
            nukeGif.style.display = "none";
        }, 3500);
        counter = 0;
        counterIncrement = 1
        counterText.textContent = `Times Clicked: ${counter}`;
    }
    else if(Buyable6 === false){
        null
    }
    else{
        alert("You're broke lol")
    }
}




UpgradeHexa.addEventListener("click", BuyHexa)
UpgradePenta.addEventListener("click", BuyPenta)
nuke.addEventListener("click", EndGame)
UpgradeQuad.addEventListener("click", BuyQuad)
UpgradeTriple.addEventListener("click", BuyTriple)
upgradeDouble.addEventListener("click", BuyDouble)
backButton.addEventListener("click", EndUDisplay)
upgradeButton.addEventListener("click", DisplayUpgrades)
button.addEventListener("click", AddCounter)