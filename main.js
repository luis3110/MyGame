let player;
let pImg;
let cImg
let bImg;
let coins = [];





function preload() {
    pImg = loadImage("./assets/player.jpg");
    cImg = loadImage("./assets/coin.png");
    bImg = loadImage("./assets/mountain.png"); 

}


function setup () {
    createCanvas(1400, 900);
    player = new Player();


}

function keyPressed () {
    if (key == " ") {
        player.jump();
    }
}


function draw () {
    if (random(1) < 0.01) {
        coins.push(new Coins()); 
    }
    


    background(bImg);
    player.show();
    player.move();


    for (let c of coins) {
        c.move();
        c.show();
        if (player.hits(c  )) {
            console.log("you got 5 more seconds!");
        }
    }


}