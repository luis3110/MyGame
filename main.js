let player;
let pImg;
let cImg
let bImg;




function preload() {
    pImg = loadImage("./assets/player.jpg");
    cImg = loadImage("./assets/coin.png");
    bImg = loadImage("./assets/mountain.png");

}


function setup () {
    createCanvas(1400, 750);
    player = new Player();


}

function keyPressed () {
    if (key == " ") {
        player.jump();
    }
}


function draw () {
    background(bImg);
    player.show();
    player.move();


}