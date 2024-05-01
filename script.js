let clicks = 0;
let autoClickers = 0;
let megaClickers = 0;
let doubleClicks = 0;
let bonusClicks = 0;

function updateClicks() {
    document.getElementById('score').textContent = `Score: ${clicks}`;
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

// Buy Auto Clicker
document.getElementById('autoClicker').addEventListener('click', function() {
    if (purchaseItem(10)) {
        autoClickers++;
        updateCounters();
        setInterval(function() {
            clicks += autoClickers * 0.5;
            updateClicks();
            playClickSound();
        }, 1500); // Slower click rate
    }
});

// Buy Mega Clicker
document.getElementById('megaClicker').addEventListener('click', function() {
    if (purchaseItem(50)) {
        megaClickers++;
        updateCounters();
        setInterval(function() {
            clicks += megaClickers * 2;
            updateClicks();
            playClickSound();
        }, 2000); // Faster click rate
    }
});

// Buy Double Clicks
document.getElementById('doubleClicks').addEventListener('click', function() {
    if (purchaseItem(100)) {
        doubleClicks++;
        updateCounters();
    }
});

// Buy Bonus Clicks
document.getElementById('bonusClicks').addEventListener('click', function() {
    if (purchaseItem(200)) {
        bonusClicks++;
        updateCounters();
    }
});

function updateCounters() {
    document.getElementById('autoClickerCounter').textContent = `(${autoClickers})`;
    document.getElementById('megaClickerCounter').textContent = `(${megaClickers})`;
    document.getElementById('doubleClicksCounter').textContent = `(${doubleClicks})`;
    document.getElementById('bonusClicksCounter').textContent = `(${bonusClicks})`;
}
