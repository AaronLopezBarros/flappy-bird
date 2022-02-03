class Game {
  constructor() {
    // todas nuestras propiedades del juego
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.bird = new Bird();
    this.pipeArr = [new Pipe()];
    this.pipeSeparation = 300;
  }

  spawningPipe = () => {
    let lastPipe = this.pipeArr[this.pipeArr.length - 1];

    if (lastPipe.x < canvas.width - this.pipeSeparation) {
      //aqui agrego el nuevo pipe
      let randomY = Math.random() * 100 - 100;
      let newPipe = new Pipe(randomY);
      this.pipeArr.push(newPipe);

      //agregar el otro pipe de abajo
      let randomYDown = randomY + newPipe.height + 200
      let newPipeDown = new Pipe(randomYDown)
      this.pipeArr.push(newPipeDown)
    }
    if (this.pipeArr.length > 5) this.pipeArr.shift();
  };

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // . todos nuestros metodos del juego
  gameLoop = () => {
    // 1. limpiar el canvas
    this.clearCanvas();
    // 2. mover los elemntos
    this.bird.birdGravity();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMove();
    });
    this.spawningPipe();
    // 3. dibujar los elementos
    this.drawBackground();
    this.bird.drawBird();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });
    // 4. la recursión para la animación
    requestAnimationFrame(this.gameLoop);
  };
}
