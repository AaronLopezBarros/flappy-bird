class Bird {
  constructor() {
    // aqui las propiedades de nuestro pollo
    this.x = 100;
    this.y = canvas.width / 2;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "../images/flappy.png";
    this.gravitySpeed = 2;
    this.jumpSpeed = 50;
  }

  // los metodos de nuestro pollo

  drawBird = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  birdGravity = () => {
    this.y += this.gravitySpeed;
  };

  birdJump = () => {
    this.y -= this.jumpSpeed;
  };
  // necesitaremos movimiento
}
