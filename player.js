class Player {
  constructor() {
    this.r = 120;
    this.x = 150;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.8;
  }

  jump() {
    if (this.y == height - this.r) this.vy = -23;
  }

  goLeft() {
    this.x -= 50;
  }

  goRight() {
    this.x += 50;
  }

  

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
    this.x = constrain(this.x, 0, width - this.r);
  }

  show() {
    image(pImg, this.x, this.y, this.r, this.r);
    fill(255, 50);
    // ellipseMode(CORNER);
    //ellipse(this.x, this.y, this.r, this.r)
  }
}
