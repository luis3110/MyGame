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
        this.width = 10;
        this.height = 10;
    }

/*checkCollision(player) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let playerLeftSide = player.x;
    let playerRightSide = player.x + player.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;
    let playerTopSide = player.y;
    let playerBottomSide = player.y + player.height;
    console.log(leftSide, playerLeftSide, playerRightSide)

} */


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