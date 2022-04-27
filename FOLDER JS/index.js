console.log("Js Loaded in the client");

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const player = new Player (ctx);
const background = new Background(ctx);
const hamburger = new Hamburger (ctx);
const smoothie = new Smoothie (ctx);

const game = new Game (ctx, player, hamburger, background);

const startButton = document.getElementById('start-button');

startButton.addEventListener(
    'click', () => {
        startButton.textContent = 'RESTART';
        startButton.blur()
        game.start();
    }
);
