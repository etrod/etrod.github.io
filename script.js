let clicks = 0;
let autoClickers = 0;
let megaClickers = 0;
let doubleClicks = 0;
let bonusClicks = 0;

function updateClicks() {
    document.getElementById('clicksValue').textContent = clicks;
}

function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play();
}

function playPurchaseSound() {
    const purchaseSound = document.getElementById('purchaseSound');
    purchaseSound.currentTime = 0;
    purchaseSound.play();
}

function purchaseItem(cost) {
    if (clicks >= cost) {
        clicks -= cost;
        updateClicks();
        playPurchaseSound();
        return true;
    } else {
        alert("Not enough clicks!");
        return false;
    }
}

function buyAutoClicker() {
    if (purchaseItem(10)) {
        autoClickers++;
        setInterval(function() {
            clicks += autoClickers * 0.5;
            updateClicks();
            playClickSound();
        }, 1500); // Slower click rate
    }
}

function buyMegaClicker() {
    if (purchaseItem(50)) {
        megaClickers++;
        setInterval(function() {
            clicks += megaClickers * 2;
            updateClicks();
            playClickSound();
        }, 2000); // Faster click rate
    }
}

function buyDoubleClicks() {
    if (purchaseItem(100)) {
        doubleClicks++;
    }
}

function buyBonusClicks() {
    if (purchaseItem(200)) {
        bonusClicks++;
    }
}

document.getElementById('clickButton').addEventListener('click', function() {
    clicks++;
    clicks += doubleClicks * 2; // Double clicks upgrade
    clicks += bonusClicks * 5; // Bonus clicks upgrade
    updateClicks();
    playClickSound();
});

document.getElementById('autoClicker').addEventListener('click', buyAutoClicker);
document.getElementById('megaClicker').addEventListener('click', buyMegaClicker);
document.getElementById('doubleClicks').addEventListener('click', buyDoubleClicks);
document.getElementById('bonusClicks').addEventListener('click', buyBonusClicks);
