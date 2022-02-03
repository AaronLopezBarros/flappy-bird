class Pipe {
  constructor(posYparam) {
    this.x = canvas.width;
    this.y = posYparam;
    this.width = 50;
    this.height = 140;
    this.img = new Image();
    this.img.src = "./images/obstacle_top.png";
    this.speed = 3;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pipeMove = () => {
    this.x -= this.speed;
  };
}
