let player;
let pImg;
let cImg
let bImg;
let coins = [];

/*class Game {
    constructor () {
        this.background = new Background();
    }*/





function preload() {
    pImg = loadImage("./assets/player.jpg");
    cImg = loadImage("./assets/coin.png");
    bImg1 = loadImage("./assets/parallax-mountain-bg.png")
    /*bImg1 =[{src: loadImage("./assets/parallax-mountain-bg.png"), speed: 0 }, 
    { src: loadImage("./assets/parallax-mountain-montain-far.png"), spped 0}, 
    { src: loadImage("./assets/parallax-mountain-mountains.png"), speed: 0}, 
    { src: loadImage("./assets/parallax-mountain-trees.png"), speed: 0},
    { src: loadImage("./assets/parallax-mountain-foreground-trees.png"), speed: 0} ]; */
    bImg2 = loadImage("./assets/parallax-mountain-montain-far.png")
    bImg3 = loadImage("./assets/parallax-mountain-mountains.png")
    bImg4 = loadImage("./assets/parallax-mountain-trees.png")
    bImg5 = loadImage("./assets/parallax-mountain-foreground-trees.png")


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
    
    //this.background.drawingBackground();

    background(bImg1);
    //background(bImg2);
    background(bImg3);
    background(bImg4);
    background(bImg5); 


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

//}