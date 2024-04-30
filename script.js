// Initialize score
let score = 0;

// Function to increment score when button is clicked
function incrementScore() {
    score++;
    document.getElementById('scoreValue').textContent = score;
}

// Event listener for button click
document.getElementById('clickButton').addEventListener('click', incrementScore);
