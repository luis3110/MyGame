/*function getRandom(min, max){
    min = Math.ceil(50);
    max = Math.floor(750);
    return Math.floor(Math.random()*(750-(50))+(50)*(-1));
} */

function blitz(min, max) {
    return Math.floor(Math.random() * (750 - 250) + 250) 
  }


class Coins {
    constructor() {
        this.r = 100;
        this.x = width;
        this.y = blitz(); //-getRandom --> to have a random height of coins
    }

    move() {
        this.x -= 10;
       // this.y = random; 
    }

    show() {
        image(cImg, this.x, this.y, this.r, this.r)
        fill(255, 50);
        //ellipseMode(CORNER);
        //ellipse(this.x, this.y, this.r, this.r)
    }
}