class Obstacle {
    constructor(ctx, x0, y0, img) {
      this.ctx = ctx;
      this.img = img;
      this.speedX = -4;
      this.speedY = 0;
      this.width = 90;
      this.height = 80;
      this.x = 570;
      this.y = 395;
      this.img = new Image();
      this.img.src="IMAGES/hamburger.png";
    }
  
    move(frameId) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  
    draw(frameId) {
      if (!this.img) this.ctx.fillRect(this.x, this.y, this.width, this.height);
      else this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }