class Game {
  screen = 1; // 0= splash start, 1 = game, 2 = gamover
  points = 0;
  ctx = null;
  frameId = null;
  background = null;
  sounds = new Sounds();
  player = null;
  obstacles = [];
  juices = [];

  init() {
    if (this.ctx === null) {
      this.ctx = document.getElementById("canvas").getContext("2d");
    }
    this.frames = window.requestAnimationFrame(this.play.bind(this))
    this.setCanvasToFullScreen();
    this.setEventHandlers();
    this.start();
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
    }
  }

  setCanvasToFullScreen() {
    this.ctx.canvas.height = 500;
    this.ctx.canvas.width = 800;
    if(this.frames)window.cancelAnimationFrame(this.frame)
    
  }

  setEventHandlers() {
    window.addEventListener("resize", this.setCanvasToFullScreen.bind(this));
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") this.player.jump();
    });
  }

  generateJuice(){
    if(this.frameId > 150){
      if(this.frameId % 150 === 0){
        console.log("juice")
        this.juices.push(
        new Juice(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
        );
      }
    }
  }
  
  generateObstacle() {
    if (this.frameId > 10) {
      if (this.frameId % 7 === 0) {
        console.log("Obstacle generated");
        this.obstacles.push(
          new Obstacle(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
        );
      }  
    }
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
    this.background.draw(this.frameId);
    this.player.draw(this.frameId);
    this.obstacles.forEach((obstacle) => obstacle.draw(this.frameId));
    this.juices.forEach((juice) => juice.draw(this.frameId));
    this.frameId = requestAnimationFrame(this.play.bind(this));
  }
}