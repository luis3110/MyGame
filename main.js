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
    if (c.hits(player) === true) {
      score += 10;
      console.log(score);
      console.log(coins);

      // This filter is removing the coins once they are collected. It's saying...
      // remove the coins from the array if that specific coin's hit function returns a false or the coin leaves the canvas to the left remove it from the array
      coins = coins.filter((coin) => {
        if (!coin.hits(player) || coin.x < 0) {
          return true;
        }
      });
    }
  }
}
