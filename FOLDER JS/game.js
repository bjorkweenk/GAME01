class Game {
  screen = 0; // 0= splash start, 1 = game, 2 = gamover
  points = 0;
  ctx = null;
  frameId = null;
  background = null;
  sounds = new Sounds();
  score = 0;
  player = null;
  obstacles = [];
  juices = [];
  gameOverBool = false;


  init() {
    if(this.frames) window.cancelAnimationFrame(this.frames);
    this.frames = null;  
    if (this.ctx === null) {
      this.ctx = document.getElementById("canvas").getContext("2d");
    }
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") this.player.jump();
    });

    this.setCanvasToFullScreen();
    this.start();
    this.frames = window.requestAnimationFrame(this.play.bind(this))
  }

  start() {
    switch (this.screen) {
      case 0:
        this.displaySplashStart();
        break;
      case 1:
        this.reset();
        this.frameId = window.requestAnimationFrame(this.play.bind(this));
        break;
        case 2:
          console.log("screen 2")
          this.displayGameOver();
          break;
          default:
            console.log("we good?")
    }
  }

displaySplashStart(){
    const startButton = document.createElement("button");
    startButton.id = "game-start";
    startButton.textContent = "Start Game";
    startButton.onclick = () => {
      this.screen = 1;
      this.start();
      startButton.remove();
    };
    document.body.appendChild(startButton);
  }

  displayGameOver(){
    const startButton = document.createElement("button");
    startButton.id = "restart";
    startButton.textContent = "RESTART";
    startButton.onclick = () => {
      this.screen = 1;
      this.start();
      
    };
    document.body.appendChild(startButton);
  }



  setCanvasToFullScreen() {
    this.ctx.canvas.height = 500;
    this.ctx.canvas.width = 800; 
  }

  generateJuice(){
    if(this.frameId > 1000){
      if(this.frameId % 1000 === 0){
        this.juices.push(
        new Juice(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
        );
      }
    }
  }
  
  generateObstacle() {
    if (this.frameId > 300) {
      if (this.frameId % 600 === 0) {
        this.obstacles.push(
          new Obstacle(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
          
        );
      }  
    }
  }

  checkCollisions() {
    this.obstacles = this.obstacles.filter(
      (obstacle) => obstacle.x + obstacle.width > 0
    );
    this.obstacles.forEach((obstacle) => {
      if (
        this.player.x + this.player.width > obstacle.x &&
        this.player.x < obstacle.x + obstacle.width
      ) {
        if (this.player.y + this.player.height > obstacle.y) {
          this.gameOverBool = true;
          console.log(this.gameOverBool)
        }
      }

    });

    this.juices = this.juices.filter(
      (juice) => juice.x + juice.width > 0
    );
    this.juices.forEach((juice) => {
      if (
        this.player.x + this.player.width > juice.x &&
        this.player.x < juice.x + juice.width
      ) {
        if (this.player.y + this.player.height > juice.y &&
          this.player.y < juice.y + juice.height ) {
          console.log(" JUICE collision");
        }
      }
    });

  }

  gameOver(){
    cancelAnimationFrame(this.frameId);
    this.screen = 2; 
    this.frameId = null;
    this.ctx.save();
    this.ctx.fillStyle = "rgba(69,0,154,0.7)";
    this.ctx.fillRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 32px 'Press Start 2P'";
    this.ctx.fillText(
        `Game over!`,
        this.ctx.canvas.width/2,
        this.ctx.canvas.height/2
    );
    this.ctx.restore();
    this.sounds.play("gameOver")
}

  reset() {
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.sounds.play("main");
  }

  play() {
    this.background.move(this.frameId);
    this.player.move(this.frameId);
    this.generateObstacle();
    this.generateJuice();
    this.obstacles.forEach((obstacle) => obstacle.move(this.frameId));
    this.juices.forEach((juice)=> juice.move(this.frameId));
    this.checkCollisions();
    // ------  Drawing everything ---------
    this.ctx.clearRect(0,0,1900, 1900)
    this.background.draw(this.frameId);
    this.player.draw(this.frameId);
    this.obstacles.forEach((obstacle) => obstacle.draw(this.frameId));
    this.juices.forEach((juice) => juice.draw(this.frameId));
    this.frameId = requestAnimationFrame(this.play.bind(this));
    if(this.gameOverBool) this.gameOver();
  }
}