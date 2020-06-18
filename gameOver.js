class gameOver {
    constructor() {
        this.r = 120;
        this.x=width;
        this.y= height - this.r;
    }

    show() {
        image(gameOverImg,this.x, this.y, this.r, this.r )
    }
}