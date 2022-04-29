class Sounds {
    main = new Audio ("../SOUNDS/run.mp3");

    play(sounds) {
        this[sounds].play();

    }

    pause(sounds){
        this[sounds].pause();
    }

    gameOver = new Audio ("../SOUNDS/gameover.wav")
    bite = new Audio("../SOUNDS/mainbite.mp3")
}