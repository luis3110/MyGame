let player;
let pImg;
let cImg;
let background;
let coins = [];
let Bground;
let score = 10;
// let startGame = false;
let awesomeSound;

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
//   if (startGame == true){
//     game.drawingGame();
//   } else {
//     fill("blue");
//     ClientRect(0, 0, width, height);
//     fill("Red");
//     textSize(32);
//     textAlign(Center);
//     text("Please press any key to start!", width, 2, height, 2)
//   }
// }
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
    //   return c.draw();
    // } else return !c.draw;
      
    
  }


}
}