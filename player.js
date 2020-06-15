class Player {
    constructor() {
        this.r = 120;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 0.8;

    }

    jump() {
        if (this.y == height - this.r)
        this.vy = -24;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show () {
        image(pImg, this.x, this.y, this.r, this.r );
    }
} 