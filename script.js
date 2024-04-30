let clicks = 0;
let autoClickers = 0;
let megaClickers = 0;

function updateClicks() {
    document.getElementById('clicksValue').textContent = clicks;
}

function purchaseItem(cost) {
    if (clicks >= cost) {
        clicks -= cost;
        updateClicks();
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
        }, 1000);
    }
}

function buyMegaClicker() {
    if (purchaseItem(50)) {
        megaClickers++;
        setInterval(function() {
            clicks += megaClickers * 5;
            updateClicks();
        }, 1000);
    }
}

document.getElementById('clickButton').addEventListener('click', function() {
    clicks++;
    updateClicks();
});

document.getElementById('autoClicker').addEventListener('click', buyAutoClicker);
document.getElementById('megaClicker').addEventListener('click', buyMegaClicker);
