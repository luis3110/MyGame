class Player {
    constructor() {
        this.r = 50;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 0.8;

    }

    jump() {
        this.vy = -14;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show () {
        rect(this.x, this.y, this.r, this.r );
    }
} 