class Background {
    constructor(ctx) {
        //console.log("im inside background")
    this.ctx= ctx;
    
        this.backgroundFront = {
            height: 1590,
            width: 2728,
            img: new Image(this.width, this.height),
            x: 0,
            y: 0,
            vx: -5,
            vy: 0,
        }
        this.backgroundFront.img.src = '../IMAGES/tent.png'
        

    }

        init(){
            this.backgroundFront.x = 0;
            this.backgroundFront.y = 0;
            this.backgroundFront.vx = -5
        }


        move(frameNumber){
            this.backgroundFront.x += this.backgroundFront.vx;
            if (this.backgroundFront.x + this.ctx.canvas.width <= 0) this.backgroundFront.x = 0;

        }

        increaseVelocity(frameNumber){
            if (frameNumber % 500 === 0 && frameNumber !== 0) {
                this.backgroundFront.vx -= 0.5;
            }
        }

            draw(frameNumber){
                this.ctx.drawImage(
                    this.backgroundFront.img,
                    this.backgroundFront.x,
                    this.backgroundFront.y,
                    this.ctx.canvas.width,
                    this.ctx.canvas.height,
                );

                this.ctx.drawImage(
                    this.backgroundFront.img, 
                    this.backgroundFront.x + this.ctx.canvas.width,
                    this.backgroundFront.y,
                    this.ctx.canvas.width,
                    this.ctx.canvas.height,
                );
            }
}