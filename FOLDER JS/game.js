class Game {
  constructor(ctx, player, hamburger, background, sounds){
    this.ctx = ctx;
    this.player = player; 
    this.hambuger  = hamburger; 
    this.sounds = new Sounds();
    this.background = background; 
    this.score = 0;  
    this.frames = null;
    

  }

  start(){
    this.init();
    this.frames = window.requestAnimationFrame(this.play.bind(this))
  }


  init () {
    if (this.frames) window.cancelAnimationFrame(this.frames);
    this.ctx.canvas.height = window.innerHeight * 0.8;
    this.ctx.canvas.width = window.innerWidth * 0.8;
    this.frames = null;
    this.background.init()
    this.player.init()
  }

  move (){
    this.background.move(this.frames);
    this.player.move(this.frames);
  }

  draw(){
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.background.draw(this.frames)
    this.player.draw(this.frames)
  }

  increaseDifficulty(){
    this.background.increaseVelocity(this.frameNumber);
  }

  reset (){
    this.background = new Background(this.ctx);
    this.player = new Player (this.ctx);

  }

  play() {
    // console.log("play being called")
    this.move()
    if (this.checkCollisions()) {
      this.gameOver();
    }
    this.draw()
    this.frames = window.requestAnimationFrame(this.play.bind(this))
  }

  checkCollisions(){
  }

}
