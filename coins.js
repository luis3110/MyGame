/*function getRandom(min, max){
    min = Math.ceil(50);
    max = Math.floor(750);
    return Math.floor(Math.random()*(750-(50))+(50)*(-1));
} */

function blitz(min, max) {
    return Math.floor(Math.random() * (300 - 1) + 1) 
  }


class Coins {
    constructor() {
        this.r = 100;
        this.x = width;
        this.y = blitz(); //-getRandom --> to have a random height of coins
        this.width = 10;
        this.height = 10;
    }

    hits(player) {
        // console.log(player)
        // console.log(this)
        if (this.x > player.x + player.r || player.x > this.x + this.width){ 
            return false;
        } else {
            return true;
        }
        
    }


    move() {
        this.x -= 10; // the speed of the coins to come into the canvas 
       // this.y = random; 
    }

    show() {
        image(cImg, this.x, this.y, this.r, this.r)
        fill(255, 50);
        //ellipseMode(CORNER);
        //ellipse(this.x, this.y, this.r, this.r)
    }
}