class Sounds {
    main = new Audio ("../SOUNDS/run.mp3");

    play(sounds) {
        this[sounds].play();

    }

    pause(sounds){
        this[sounds].pause();
    }
}

console.log("SOUND ROCKING")