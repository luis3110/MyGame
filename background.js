class Background {
  constructor() {
    this.images = [
      {
        src: loadImage("../assets/parallax-mountain-bg.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("./assets/parallax-mountain-montain-far.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("./assets/parallax-mountain-mountains.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("./assets/parallax-mountain-trees.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("./assets/parallax-mountain-foreground-trees.png"),
        x: 0,
        speed: 4,
      },
    ];
  }

  move(img) {
    image(img.src, img.x, 0, width, 450);
    image(img.src, img.x + width, 0, width, 450);

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
