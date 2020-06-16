let player;
let pImg;
let cImg;
let background;
let coins = [];

function preload() {
  pImg = loadImage("./assets/Screenshot_2020-06-16_at_16-removebg-preview.png");
  cImg = loadImage("./assets/transparent_code.png");
  /*bImg1 = loadImage("./assets/parallax-mountain-bg.png")
    bImg2 = loadImage("./assets/parallax-mountain-montain-far.png")
    bImg3 = loadImage("./assets/parallax-mountain-mountains.png")
    bImg4 = loadImage("./assets/parallax-mountain-trees.png")
    bImg5 = loadImage("./assets/parallax-mountain-foreground-trees.png")*/
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  background = new Background();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key == " ") {
    player.jump();
  }
}

function draw() {
  clear();
  if (random(1) < 0.01) {
    coins.push(new Coins());
  }

  background.draw();

  /*background(bImg1);
    background(bImg3);
    background(bImg4);
    background(bImg5); */

  player.show();
  player.move();

  for (let c of coins) {
    c.move();
    c.show();
    if (player.hits(c)) {
      console.log("you got 5 more seconds!");
    }
  }
}
