class Player {
    constructor(ctx) {
        this.ctx = ctx
        this.img = new Image()
        this.img.src = "IMAGES/girl.png"
        this.spriteCount = 4
        this.sprite = 0
        this.width = 50
        this.height = 48
        this.x = 0
        this.y = 370;
        this.frames = null;
        this.speedY = 0
    }

    init() {
        this.x = 0;
        this.y = 370;
    }


    jump() {
        if (this.speedY === 0) {
            this.speedY = -15
        };
    }

    move(frameId) {
        if (frameId % 2 === 0) {
            this.y += this.speedY;
            if (this.y < 370) {
                this.speedY += 0.5; // this is gravity reducing the vertical speed
            }
            else {
                this.speedY = 0;
                this.y = 370
            }
        }
    }



    animate(frames) {
        this.sprite = Math.floor((frames / 15) % this.spriteCount)
    }

    draw(frames) {
        this.animate(frames)
        this.ctx.drawImage(this.img, this.sprite * this.width, 0, this.width, this.height, this.x, this.y, this.width * 2, this.height * 2)
    }
}

