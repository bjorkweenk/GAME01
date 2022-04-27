console.log("Hi is this working");

const game = new Game();
window.onload = () => game.init();


const startButton = document.getElementById('start-button');

startButton.addEventListener(
    'click', () => {
        startButton.textContent = 'RESTART';
        startButton.blur()
        game.start();
    }
);
