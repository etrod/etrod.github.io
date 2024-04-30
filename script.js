// Initialize score
let score = 0;

// Function to increment score when button is clicked
function incrementScore() {
    score++;
    document.getElementById('scoreValue').textContent = score;
}

// Event listener for button click
document.getElementById('clickButton').addEventListener('click', incrementScore);
let clicks = 0;
let autoClickers = 0;
let megaClickers = 0;

// Function to handle purchasing items
function purchaseItem(cost) {
    if (clicks >= cost) {
        clicks -= cost;
        document.getElementById('scoreValue').textContent = clicks;
        return true;
    } else {
        alert("Not enough clicks!");
        return false;
    }
}

// Function to handle auto clicker
function buyAutoClicker() {
    if (purchaseItem(10)) {
        autoClickers++;
        setInterval(function() {
            clicks += autoClickers;
            document.getElementById('scoreValue').textContent = clicks;
        }, 1000);
    }
}

// Function to handle mega clicker
function buyMegaClicker() {
    if (purchaseItem(50)) {
        megaClickers++;
        setInterval(function() {
            clicks += megaClickers * 5;
            document.getElementById('scoreValue').textContent = clicks;
        }, 1000);
    }
}

// Event listeners for purchasing items
document.getElementById('autoClicker').addEventListener('click', buyAutoClicker);
document.getElementById('megaClicker').addEventListener('click', buyMegaClicker);
