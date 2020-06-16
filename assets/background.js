class Background {
    constructor() {
        this.images =[
            {
                src: loadImage("./assets/parallax-mountain-bg.png"), 
                speed: 0 
            },
            {
                src: loadImage("./assets/parallax-mountain-montain-far.png"), 
                speed: 0
            },
            {
                src: loadImage("./assets/parallax-mountain-mountains.png"), 
                speed: 0
            },
            {
                src: loadImage("./assets/parallax-mountain-trees.png"),
                speed: 0
            },
            {
                src: loadImage("./assets/parallax-mountain-foreground-trees.png"), 
                speed: 0
            }
        ];
    }

    move(img) {
        image(img.src, img.x, 0, width, 450);
        image(img.src, img.x +width, 0, width, 450);

        img.x -= img.speed;
        if (img.x <= -width) {
            img.x = 0;
        }
    }

    draw() {
        for (let i = 0; i < this.images.length; i++) {
            this.move(this.images[i]);
        }
    }
}