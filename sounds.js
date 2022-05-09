class Sounds {
    main = new Audio ("./run.mp3");

    play(sounds) {
        this[sounds].play();

    }

    pause(sounds){
        this[sounds].pause();
    }

    gameOver = new Audio ("./gameover.wav")
    bite = new Audio("./mainbite.mp3")
}