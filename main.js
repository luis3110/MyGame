let player;
let pImg;
let cImg;
let background;
let coins = [];
let score = 10;
// let startGame = false;
let awesomeSound;
let counter = 0;
let timeLeft = 30;
let gameOver=false;
let collision;
let giveCoins;
let timer;
let interval;
let gameOverImg;
let ding; 
let gameOverMusic;
let music;
let gameOverPlayed = false;






function preload() {
  pImg = loadImage("./assets/Screenshot_2020-06-16_at_16-removebg-preview.png");
  cImg = loadImage("./assets/transparent_code.png");
  gameOverImg = loadImage("./assets/Game_Over_sign_video_game-512.png")
  awesomeSound = loadSound("./assets/Updraft.mp3");
  ding = loadSound("./assets/large_plate+hardhammer.mp3");
  gameOverMusic = loadSound("./assets/Evil_Laugh_1-Timothy-64737261.mp3");
  music = loadSound("./assets/Updraft.mp3");
}

function setup() {
  createCanvas(windowWidth, 450)
  //music.play(); 

  player = new Player();
  background = new Background();

   timer = select('#timer');
  timer.html(timeLeft - counter);

   interval = setInterval(timeIt, 1000);
  
  function timeIt() {
    counter ++;
    timer.html(timeLeft - counter); 
  }
  
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
  // console.log(gameOver)
  // if(gameOver){
  //   image(gameOverImg,0, 0, width, 0);
  //   rect(0,0,width,height);
  //   if(!gameOverMusic.isPlaying()){
  //       gameOverMusic.play();
  //       //gameOverMusic.stop();
  //   }
    
  // }
  console.log(gameOver)
  if(gameOver){
    image(gameOverImg,0, 0, width, 0);
    rect(0,0,width,height);
    if(!gameOverPlayed){
        gameOverMusic.play();
        gameOverPlayed = true
    }
    
  }
  else{
    if (counter == timeLeft){
      //gameOver.draw();
      clearInterval(interval);  
      gameOver=true
      //counter = 0;
    }
  
    //frameRate(30); 
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
      if (c.hits(player) === true) {
        score += 10;
        timeLeft+=3; 
        ding.play();
        console.log(score);
        console.log(coins);
  
        // This filter is removing the coins once they are collected. It's saying...
        // remove the coins from the array if that specific coin's hit function returns a false or the coin leaves the canvas to the left remove it from the array
      
      }
    }
    coins = coins.filter((coin) => {
      if (!coin.hits(player) || coin.x < 0) {
        
        return true;
      }
    });
  
  
  }
  
}
