class Player {
    constructor(ctx){
        this.ctx = ctx
        this.img = new Image()
        this.img.src = "../IMAGES/girl.png"
        this.spriteCount = 4
        this.sprite = 0
        this.width = 50
        this.height = 48
        this.x = 0
        this.y = 470
        this.frames = null ; 
    }

    init(){
        this.x = 0
        this.y = 470
    }

    move(frameNumber){

    }

    animate(frames){
        this.sprite = Math.floor((frames / 10) % this.spriteCount)
        console.log(this.sprite)

    }

    draw(frames){
        this.animate(frames)
        this.ctx.drawImage(this.img, this.sprite * this.width, 0, this.width, this.height, this.x, this.y, this.width * 2, this.height * 2 )
    }
}