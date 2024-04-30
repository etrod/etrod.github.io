let score = 0;

function click() {
    score++;
    updateScore();
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

document.getElementById('clickButton').addEventListener('click', click);

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("shop").style.display = "block";
});
