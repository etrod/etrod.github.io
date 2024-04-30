let clicks = 0;
let autoClickers = 0;
let megaClickers = 0;

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
            clicks += autoClickers;
            updateClicks();
            playClickSound();
        }, 1000);
    }
}

function buyMegaClicker() {
    if (purchaseItem(50)) {
        megaClickers++;
        setInterval(function() {
            clicks += megaClickers * 5;
            updateClicks();
            playClickSound();
        }, 1000);
    }
}

document.getElementById('clickButton').addEventListener('click', function() {
    clicks++;
    updateClicks();
    playClickSound();
});

document.getElementById('autoClicker').addEventListener('click', buyAutoClicker);
document.getElementById('megaClicker').addEventListener('click', buyMegaClicker);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('shop').style.display = 'block';
});
