var gameData = {
    plasma: 0,
    plasPerClick: 1,
    plasPerClickCost: 10,
    update: "0.0.1"
}

function plasmine() {
    gameData.plasma += gameData.plasPerClick
    document.getElementById("plasmined").innerHTML = gameData.plasma + " Plasma"
}

function buyPlasPerClick() {
    if (gameData.plasma >= gameData.plasPerClickCost) {
        gameData.plasma -= gameData.plasPerClickCost
        gameData.plasPerClick += 1
        gameData.plasPerClickCost * 2
        document.getElementById("plasmined").innerHTML = gameData.plasma + " Plasma"
        document.getElementById("perClickUpgrade").innerHTML = "Plasminer (Level " + gameData.plasPerClick + ") (Cost 10)"
    }
}

var mainGameLoop = window.setInterval(function() {
    mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem(plasminerSave, JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem(plasminerSave))
if (savegame !== null){
    gameData = savegame
if (typeof savegame.dwarves !== "undefined")
    gameData.dwarves = savegame.dwarves
}