document.getElementById('startGameButton').addEventListener('click', function() {
    startGame();
});

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('toggleMusicButton').addEventListener('click', toggleMusic);
});
document.getElementById('volumeControl').addEventListener('input', function() {
    const music = document.getElementById('gameMusic');
    music.volume = this.value;
});
document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});
document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
});
function startGame() {
    // start the music
    document.getElementById('gameMusic').play();
    // Hide the start button
    document.getElementById('startGameButton').style.display = 'none';
    // Show the game choices
    document.getElementById('choices').style.display = 'block';
    document.getElementById('weaponText').style.display = 'block';
}
function toggleMusic() {
    const music = document.getElementById('gameMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
        return 'You win!';
    }
    return 'You lose!';
}

function displayResult(userChoice, computerChoice, result) {
    const resultDiv = document.getElementById('result');
    const resultClass = result === 'You win!' ? 'Win' : result === 'You lose!' ? 'Lose' : 'Tie';

    resultDiv.innerHTML = `
        <p>Your Choice: <span class="choice-${userChoice}"><strong>${userChoice}</strong></span></p>
        <p>Computer's Choice: <span class="choice-${computerChoice}"><strong>${computerChoice}</strong></span></p>
        <p class="${resultClass}"><strong>${result}</strong></p>
    `;
}
