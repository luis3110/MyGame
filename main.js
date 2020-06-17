let player;
let pImg;
let cImg;
let background;
let coins = [];
let Bground;
let score = 10;

function preload() {
  pImg = loadImage("./assets/Screenshot_2020-06-16_at_16-removebg-preview.png");
  cImg = loadImage("./assets/transparent_code.png");
  //bground = loadImage("./assets/grey.jpg");
}

function setup() {
  createCanvas(windowWidth, 450);
  player = new Player();
  background = new Background();
  //bground = new Bground();
}

function windowResized() {
  resizeCanvas(windowWidth, 450);
}

function keyPressed() {
  if (keyCode === 87) {
    player.jump();
  }
  if (keyCode === 68) {
    player.goRight();
  }
  if (keyCode === 65) {
    player.goLeft();
  }
  
}



function draw() {
  //frameRate(30);
  clear();
  if (random(1) < 0.01) {
    coins.push(new Coins());
  }

  background.draw();
  //bground.draw();

  player.show();
  player.move();

  for (let c of coins) {
    c.move();
    c.show();
    if (c.hits(player)) {
      score += 10;
      console.log(score);
    }
  }


  
  /*this.obstacles.forEach((elem) => {
    // we draw all of the obstacles
    elem.drawingObstacles();
    elem.checkCollision(this.player);
  });
  this.coins = this.coins.filter((coins) => {
    // here we check if the collision is happening, and if it is happenind we return false to filter the obstacle :D
    if (coins.checkCollision(this.player)) {
      console.log("happening");
      return false;
    } else {
      // here we keep the obstacles
      console.log(" not colliding");

      return true;
    }
  });*/



}
