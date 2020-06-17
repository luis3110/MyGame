class Player {
    constructor() {
        this.r = 120;
        this.x = 50;
        this.y =  height - this.r;
        this.vy = 0;
        this.gravity = 0.8;
    }

    jump() {
        //if (this.y == height - this.r)
        this.vy = -24;
    }

    goLeft() {
        this.x = -50;
    }

    goRight() {
        this.x = +50;
    }

    hits(coin) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = coin.x + coin.r * 0.5;
        let y2 = coin.y + coin.r * 0.5;

        
        
        return collideCircleCircle(x1, y1, this.r, this.r, x2, y2, coin.r, coin.r);
    }


    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show () {
        image(pImg, this.x, this.y, this.r, this.r );
        fill(255, 50);
        // ellipseMode(CORNER);
        //ellipse(this.x, this.y, this.r, this.r)

    }
} 