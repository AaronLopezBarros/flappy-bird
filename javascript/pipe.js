class Pipe {
  constructor(posYparam, srcParam) {
    this.x = canvas.width;
    this.y = posYparam;
    this.width = 50;
    this.height = 170;
    this.img = new Image();
    this.img.src = srcParam;
    this.speed = 3;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pipeMove = () => {
    this.x -= this.speed;
  };
}
