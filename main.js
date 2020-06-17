let player;
let pImg;
let cImg;
let background;
let coins = [];

function preload() {
  pImg = loadImage("./assets/Screenshot_2020-06-16_at_16-removebg-preview.png");
  cImg = loadImage("./assets/transparent_code.png");
}

function setup() {
  createCanvas(windowWidth, 450);
  player = new Player();
  background = new Background();
}

function windowResized() {
  resizeCanvas(windowWidth, 450);
}

function keyPressed() {
  if (key == " ") {
    player.jump();
  }
  if (key === "39") {
    player.goRight();
  }
}

function draw() {
  clear();
  if (random(1) < 0.01) {
    coins.push(new Coins());
  }

  background.draw();

  player.show();
  player.move();

  for (let c of coins) {
    c.move();
    c.show();
    if (player.hits(c)) {
      console.log("good!");
    }
  }
}
